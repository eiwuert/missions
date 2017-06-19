<template>
	<div>
		<aside :show.sync="showActivityFilters" placement="left" header="Team Filters" :width="375">
			<hr class="divider inv sm">
			<form class="col-sm-12">
			</form>
		</aside>
		<form class="form-inline">
			<div class="input-group input-group-sm">
				<input type="text" class="form-control" v-model="activityOptions.search" debounce="300" placeholder="Search">
				<span class="input-group-addon"><i class="fa fa-search"></i></span>
			</div>

			<button class="btn btn-default btn-sm" @click="showActivityFilters = true;">Filters</button>
			<date-picker :has-error="" :model.sync="activityOptions.starts|moment 'YYYY-MM-DD' false true" type="date" placeholder="Start DateTime" input-sm></date-picker>
			<date-picker :has-error="" :model.sync="activityOptions.ends|moment 'YYYY-MM-DD' false true" type="date" placeholder="End DateTime" input-sm></date-picker>

			<button class="btn btn-primary btn-sm" @click="showActivityFilters = true;">Add Activity</button>
		</form>
		<hr class="divider">
		<div class="panel-group" id="activityAccordion" role="tablist" aria-multiselectable="true">
			<div class="panel panel-default" v-for="activity in activities">
				<div class="panel-heading" role="tab" :id="'activity_title' + $index">
					<h4 class="panel-title">
						<a role="button" data-toggle="collapse" data-parent="#activityAccordion" :href="'activity_' + $index" aria-expanded="true" aria-controls="collapseOne">
							Collapsible Group Item #1
						</a>
					</h4>
				</div>
				<div :id="'activity_' + $index" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="'activity_title' + $index">
					<div class="panel-body">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<style></style>
<script type="text/javascript">
    import _ from 'underscore';
    import vSelect from 'vue-select';
    import errorHandler from '../error-handler.mixin';
    import utilities from '../utilities.mixin';
    export default{
        name: 'transports-details-passengers',
//        mixins: [errorHandler, utilities],
	    components: {vSelect},
	    props: ['transport'],
        data(){
            return {
                showActivityFilters: false,
                activities: [],
                activitiesPagination: { current_page: 1 },
	            activityOptions: {
                    search: '',
		            starts: null,
		            ends: null,
	            },

	            ActivityResource: this.$resource('activities{/activity}')
            }
        },
	    watch: {
            activityOptions: {
                handler(val) {
                    this.getActivities();
                },
	            deep: true
            },
	    },
        methods: {
			getActivities() {
                let params = _.extend({}, this.activityOptions);

                return this.ActivityResource.get(params).then(function (response) {
			        this.activitiesPagination = response.body.meta.pagination;
				    return this.activities = response.body.data;
                }, this.handleApiError);
			}
        },
        ready(){
			this.getActivities();
        }
    }
</script>