<template>
	<div>
		<aside :show.sync="showActivityFilters" placement="left" header="Activity Filters" :width="375">
			<hr class="divider inv sm">
			<form class="col-sm-12">
				<div class="form-group">
					<label>Activity Type</label>
					<select class="form-control" v-model="activityFilters.type">
						<option value="">Any Type</option>
						<option :value="type.id" v-for="type in UTILITIES.activityTypes" v-text="type.name|capitalize"></option>
					</select>
				</div>
			</form>
		</aside>
		<form class="form-inline">
			<div class="input-group input-group-sm">
				<input type="text" class="form-control" v-model="activityFilters.search" debounce="300" placeholder="Search">
				<span class="input-group-addon"><i class="fa fa-search"></i></span>
			</div>
			<button class="btn btn-default btn-sm" @click="showActivityFilters = true;">Filters</button>
			<date-picker :has-error="" :model.sync="activityFilters.starts|moment 'YYYY-MM-DD' false true" type="date" placeholder="Start DateTime" input-sm></date-picker>
			<date-picker :has-error="" :model.sync="activityFilters.ends|moment 'YYYY-MM-DD' false true" type="date" placeholder="End DateTime" input-sm></date-picker>

			<button type="button" class="btn btn-primary btn-sm" @click="newActivity();">Add Activity</button>
		</form>
		<hr class="divider">

		<!-- Create Activity-->
		<div class="panel panel-default" v-if="activityModal">
			<div class="panel-heading">
				<h3 class="panel-title">Create Activity</h3>
			</div>
			<div class="panel-body">
				<travel-activity :activity="selectedActivity" :activity-types="activityTypes" transport-domestic></travel-activity>
			</div>
		</div>
		<!-- Activities List -->
		<template v-if="activities.length">
			<div class="row">
				<div class="panel-group col-xs-12" id="activityAccordion" role="tablist" aria-multiselectable="false">
					<div class="panel panel-default" v-for="activity in activities">
						<div class="panel-heading" role="tab" :id="'activity_title' + $index">
							<h3 class="panel-title">
								<a role="button" data-toggle="collapse" data-parent="#activityAccordion" :href="'#activity_' + $index" aria-expanded="true" :aria-controls="'activity' + $index">
									{{activity.name | capitalize}} <span class="label label-default" v-text="activity.type.name|capitalize"></span>
									<span class="small text-muted"><i class="fa fa-clock-o"></i> {{activity.occurred_at|moment 'lll'}}</span>
								</a>
								<a @click="confirmDeleteActivity(activity)" class="btn btn-xs btn-default-hollow pull-right">
									<i class="fa fa-trash"></i>
								</a>
								<a @click="editActivity(activity)" class="btn btn-xs btn-default-hollow pull-right">
									<i class="fa fa-cog"></i>
								</a>

								<p class="small" v-text="activity.description"></p>
							</h3>
						</div>
						<div :id="'activity_' + $index" class="panel-collapse collapse" role="tabpanel" aria-labelledby="'activity_title' + $index">
							<div class="panel-body">
								<div class="row">
									<div class="col-sm-6">
										<h4>Hubs</h4>
									</div>
									<div class="col-sm-6 text-right">
										<button class="btn btn-sm btn-primary" type="button" @click="newHub">Add Hub</button>
									</div>
								</div>

								<hr class="divider sm">
								<div class="list-group">
									<div class="list-group-item" v-for="hub in activity.hubs.data">
										<h4 class="list-group-item-heading">
											{{hub.name | capitalize}} <span v-if="hub.call_sign">({{hub.call_sign}})</span>

											<a @click="confirmDeleteHub(hub)" class="btn btn-xs btn-default-hollow pull-right">
												<i class="fa fa-trash"></i>
											</a>
											<a @click="editHub(hub)" class="btn btn-xs btn-default-hollow pull-right">
												<i class="fa fa-cog"></i>
											</a>
										</h4>
										<p class="list-group-item-text">
											{{hub.address}}
											{{hub.city}} {{hub.state}} {{hub.zip}}
											{{hub.country_code | uppercase}}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-xs-12 text-center">
					<pagination :pagination.sync="activitiesPagination" :callback="getActivities"></pagination>
				</div>
			</div>
		</template>
		<!-- Activities List Empty State -->
		<template v-else>
			<hr class="divider inv">
			<p class="text-center text-muted"><em>No activities</em></p>
		</template>

		<modal :title="editMode?'Edit Hub':'Create Hub'" :ok-text="editMode?'Update':'Create'" :callback="saveHub" :show.sync="hubModal">
			<div slot="modal-body" class="modal-body" v-if="selectedHub">
				<travel-hub :hub.sync="selectedHub" :activity-types="activityTypes"></travel-hub>
			</div>
		</modal>
		<modal title="Delete Hub" small ok-text="Delete" :callback="deleteHub" :show.sync="showHubDeleteModal">
			<div slot="modal-body" class="modal-body">
				<p v-if="selectedHub">
					Are you sure you want to delete {{selectedHub.name}} ?
				</p>
			</div>
		</modal>
		<modal title="Delete Activity" small ok-text="Delete" :callback="deleteActivity" :show.sync="showActivityDeleteModal">
			<div slot="modal-body" class="modal-body">
				<p v-if="selectedActivity">
					Are you sure you want to delete {{selectedActivity.name}} ?
				</p>
			</div>
		</modal>

	</div>
</template>
<style></style>
<script type="text/javascript">
    import _ from 'underscore';
    import vSelect from 'vue-select';
    import errorHandler from '../error-handler.mixin';
    import utilities from '../utilities.mixin';
    import travelActivity from '../reservations/travel-activity.vue';
    import travelHub from '../reservations/travel-hub.vue';
    export default{
        name: 'transports-details-itinerary',
        mixins: [/*errorHandler,*/ utilities],
	    components: {vSelect, travelActivity, travelHub},
	    props: ['transport'],
        data(){
            return {
                showActivityFilters: false,
                showActivityDeleteModal: false,
                showHubDeleteModal: false,
                activities: [],
                activitiesPagination: { current_page: 1 },
	            activityFilters: {
                    type: '',
                    search: '',
		            starts: null,
		            ends: null,
	            },
	            selectedActivity: null,
	            selectedHub: null,
                activityModal: false,
                hubModal: false,
                editMode: false,

	            ActivityResource: this.$resource('activities{/activity}'),
	            HubResource: this.$resource('hubs{/hub}')
            }
        },
	    watch: {
            activityFilters: {
                handler(val) {
                    this.getActivities();
                },
	            deep: true
            },
	    },
        methods: {
            ActivityFactory() {
                return {
                    name: '',
                    activity_type_id: '',
                    description: '',
                    occurred_at: '',
                };
            },
            HubFactory() {
                return {
                    name: '',
                    address: '',
                    call_sign: '', // required
                    city: '',
                    state: '',
                    zip: '',
                    country_code: '',
                }
            },
            newActivity() {
				this.selectedActivity = _.extend({}, this.ActivityFactory());
				this.activityModal = true;
            },
            newHub() {
				this.selectedHub = _.extend({}, this.HubFactory());
				this.hubModal = true;
            },
            editActivity(activity) {
				this.selectedActivity = activity;
				this.editMode = true;
				this.activityModal = true;
            },
            editHub(hub) {
				this.selectedHub = hub;
                this.editMode = true;
                this.hubModal = true;
            },
			getActivities() {
                let params = _.extend({}, this.activityFilters);
                params.page = this.activitiesPagination.current_page;
                params.include = 'hubs';

                return this.ActivityResource.get(params).then(function (response) {
			        this.activitiesPagination = response.body.meta.pagination;
				    return this.activities = response.body.data;
                }, this.handleApiError);
			},
	        confirmDeleteHub(hub){
                this.selectedHub = hub;
                this.showHubDeleteModal = true;
            },
	        confirmDeleteActivity(activity){
	            this.selectedActivity = activity;
	            this.showActivityDeleteModal = true;
	        },
	        saveHub(){
	            let data = _.extend({}, this.selectedHub);
	            data.campaign_id = null;
	        },
	        saveActivity(){},
	        updateHub(){},
	        updateActivity(){},
	        deleteHub(){
                this.HubResource.delete({ activity: this.selectedHub.id }).then(function () {
                    this.getActivities();
                }, this.handleApiError);
	        },
	        deleteActivity(){
	            this.ActivityResource.delete({ activity: this.selectedActivity.id }).then(function () {
	                this.getActivities();
	            }, this.handleApiError);
	        },
        },
        ready(){
            this.getActivityTypes();
			this.getActivities();
        }
    }
</script>