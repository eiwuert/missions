<template>
	<div>
		<hr class="divider inv sm">
		<form class="col-sm-12">
			<div class="form-group">
				<label>Groups</label>
				<v-select @keydown.enter.prevent=""  class="form-control" id="groupFilter" multiple :debounce="250" :on-search="getGroups"
				          :value.sync="groupsArr" :options="groupsOptions" label="name"
				          placeholder="Filter Groups"></v-select>
			</div>
			<div class="form-group" v-if="isAdminRoute">
				<label>Managing Users</label>
				<v-select @keydown.enter.prevent=""  class="form-control" id="userFilter" multiple :debounce="250" :on-search="getUsers"
				          :value.sync="usersArr" :options="usersOptions" label="name"
				          placeholder="Filter Users"></v-select>
			</div>
			<div class="form-group" v-if="!tripId">
				<label>Campaign</label>
				<v-select @keydown.enter.prevent=""  class="form-control" id="campaignFilter" :debounce="250" :on-search="getCampaigns"
				          :value.sync="campaignObj" :options="campaignOptions" label="name"
				          placeholder="Filter by Campaign"></v-select>
			</div>

			<div class="form-group">
				<label>Trip Type</label>
				<select  class="form-control input-sm" v-model="filterObject.type">
					<option value="">Any Type</option>
					<option value="ministry">Ministry</option>
					<option value="family">Family</option>
					<option value="international">International</option>
					<option value="media">Media</option>
					<option value="medical">Medical</option>
					<option value="leader">Leader</option>
				</select>
			</div>

			<div class="form-group">
				<label>Gender</label>
				<select class="form-control input-sm" v-model="filterObject.gender" style="width:100%;">
					<option value="">Any Genders</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>
			</div>

			<div class="form-group">
				<label>Marital Status</label>
				<select class="form-control input-sm" v-model="filterObject.status" style="width:100%;">
					<option value="">Any Status</option>
					<option value="single">Single</option>
					<option value="married">Married</option>
				</select>
			</div>

			<!-- Cost/Payments -->
			<div class="form-group">
				<label>Applied Cost</label>
				<select class="form-control input-sm" v-model="filterObject.dueName" style="width:100%;">
					<option value="">Any Cost</option>
					<option v-for="option in dueOptions" v-bind:value="option">
						{{ option }}
					</option>
				</select>
			</div>
			<div class="form-group" v-if="filterObject.dueName">
				<label>Payment Status</label>
				<select class="form-control input-sm" v-model="filterObject.dueStatus" style="width:100%;">
					<option value="">Any Status</option>
					<option value="overdue">Overdue</option>
					<option value="late">Late</option>
					<option value="extended">Extended</option>
					<option value="paid">Paid</option>
					<option value="pending">Pending</option>
				</select>
			</div>
			<!-- end cost/payments -->

			<div class="form-group" v-if="isAdminRoute">
				<label>Arrival Designation</label>
				<select  class="form-control input-sm" v-model="filterObject.designation">
					<option value="">Any</option>
					<option value="eastern">Eastern</option>
					<option value="western">Western</option>
					<option value="international">International</option>
					<option value="none">None</option>
				</select>
			</div>

			<!-- Requirements -->
			<div class="form-group">
				<label>Requirements</label>
				<select class="form-control input-sm" v-model="filterObject.requirementName" style="width:100%;">
					<option value="">Any Requirement</option>
					<option v-for="option in requirementOptions" v-bind:value="option">
						{{ option }}
					</option>
				</select>
			</div>
			<div class="form-group" v-if="filterObject.requirementName">
				<select class="form-control input-sm" v-model="filterObject.requirementStatus" style="width:100%;">
					<option value="">Any Status</option>
					<option value="incomplete">Incomplete</option>
					<option value="reviewing">Reviewing</option>
					<option value="attention">Attention</option>
					<option value="complete">Complete</option>
				</select>
			</div>
			<!-- end requirements -->

			<!-- Todos -->
			<div class="form-group" v-if="isAdminRoute">
				<label>Todos</label>
				<select class="form-control input-sm" v-model="filterObject.todoName" style="width:100%;">
					<option value="">Any Todo</option>
					<option v-for="option in todoOptions" v-bind:value="option">
						{{ option }}
					</option>
				</select>
			</div>
			<div class="form-group" v-if="filterObject.todoName">
				<label class="radio-inline">
					<input type="radio" name="companions" id="companions1" v-model="filterObject.todoStatus" :value="null"> Any
				</label>
				<label class="radio-inline">
					<input type="radio" name="companions" id="companions2" v-model="filterObject.todoStatus" value="complete"> Complete
				</label>
				<label class="radio-inline">
					<input type="radio" name="companions" id="companions3" v-model="filterObject.todoStatus" value="incomplete"> Incomplete
				</label>
			</div>
			<!-- end todos -->

			<!-- Trip Rep -->
			<div class="form-group" v-if="isAdminRoute">
				<label>Trip Rep</label>
				<select class="form-control input-sm" v-model="filterObject.rep" style="width:100%;">
					<option value="">Any Rep</option>
					<option v-for="option in repOptions" v-bind:value="option.id">
						{{ option.name | capitalize }}
					</option>
				</select>
			</div>
			<!-- end trip rep -->

			<div class="form-group">
				<label>Shirt Size</label>
				<v-select @keydown.enter.prevent=""  class="form-control" id="ShirtSizeFilter" :value.sync="shirtSizeArr" multiple
				          :options="shirtSizeOptions" label="name" placeholder="Shirt Sizes"></v-select>
			</div>

			<div class="form-group">
				<div class="row">
					<div class="col-xs-12">
						<label>Age Range</label>
					</div>
					<div class="col-xs-6">
						<div class="input-group input-group-sm">
							<span class="input-group-addon">Age Min</span>
							<input type="number" class="form-control" number v-model="ageMin" min="0">
						</div>
					</div>
					<div class="col-xs-6">
						<div class="input-group input-group-sm">
							<span class="input-group-addon">Max</span>
							<input type="number" class="form-control" number v-model="ageMax" max="120">
						</div>
					</div>
				</div>
			</div>

			<div class="form-group">
				<label>Travel Companions</label>
				<div>
					<label class="radio-inline">
						<input type="radio" name="companions" id="companions1" v-model="filterObject.hasCompanions" :value="null"> Any
					</label>
					<label class="radio-inline">
						<input type="radio" name="companions" id="companions2" v-model="filterObject.hasCompanions" value="yes"> Yes
					</label>
					<label class="radio-inline">
						<input type="radio" name="companions" id="companions3" v-model="filterObject.hasCompanions" value="no"> No
					</label>
				</div>
			</div>

			<hr class="divider inv sm">
			<button class="btn btn-default btn-sm btn-block" type="button" @click="resetCallback"><i class="fa fa-times"></i> Reset Filters</button>
		</form>
	</div>
</template>
<style></style>
<script type="text/javascript">
	import _ from 'underscore';
	import vSelect from 'vue-select';
    export default{
        name: 'reservations-filters',
	    components: {vSelect},
	    props: {
			filterObject: {
			    type: Object,
				required: true
			},
		    resetCallback: {
			    type: Function,
			    required: true
		    },
		    ageMin: {
			    type: Number,
			    default: 0
		    },
		    ageMax: {
			    type: Number,
			    default: 120
		    },
	    },
        data(){
            return {
                groupsArr: [],
                usersArr: [],
                shirtSizeArr: [],
                campaignObj: null,
                groupsOptions: [],
                usersOptions: [],
                campaignOptions: [],
                shirtSizeOptions: [
                    {id: 'XS', name: 'Extra Small'},
                    {id: 'S', name: 'Small'},
                    {id: 'M', name: 'Medium'},
                    {id: 'L', name: 'Large'},
                    {id: 'XL', name: 'Extra Large'},
                    {id: 'XXL', name: 'Extra Large X2'},
                ],
                todoOptions: [],
                requirementOptions: [],
                repOptions: [],
                dueOptions: [],
            }
        },
	    watch: {
		    'campaignObj': function (val) {
		        this.filterObject.campaign = val ? val.id : undefined;
		     },
		    'shirtSizeArr': function (val) {
		        this.filterObject.shirtSize = _.pluck(val, 'id') || undefined;
		     },
		    'groupsArr': function (val) {
		        this.filterObject.groups = _.pluck(val, 'id') || undefined;
		     },
		    'usersArr': function (val) {
		        this.filterObject.user = _.pluck(val, 'id') || undefined;
		     },
	    },
        methods: {
            getGroups(search, loading){
                loading ? loading(true) : void 0;
                let promise = this.$http.get('groups', { params: {search: search} }).then(function (response) {
                    this.groupsOptions = response.body.data;
                    if (loading) {
                        loading(false);
                    } else {
                        return promise;
                    }
                });
            },
            getCampaigns(search, loading){
                loading ? loading(true) : void 0;
                let promise = this.$http.get('campaigns', { params: {search: search} }).then(function (response) {
                    this.campaignOptions = response.body.data;
                    if (loading) {
                        loading(false);
                    } else {
                        return promise;
                    }
                });
            },
            getUsers(search, loading){
                loading ? loading(true) : void 0;
                let promise = this.$http.get('users', { params: {search: search} }).then(function (response) {
                    this.usersOptions = response.body.data;
                    if (loading) {
                        loading(false);
                    } else {
                        return promise;
                    }
                });
            },
            getTodos(){
                return this.$http.get('todos', { params: {
                    'type': 'reservations',
                    'per_page': 100,
                    'unique': true
                }}).then(function (response) {
                    this.todoOptions = _.uniq(_.pluck(response.body.data, 'task'));
                });
            },
            getReps(){
                return this.$http.get('users', { params: {
                    'rep': true,
                    'per_page': 100
                }}).then(function (response) {
                    this.repOptions = response.body.data;
                });
            },
            getRequirements(){
                return this.$http.get('requirements', { params: {
                    'type': 'trips',
                    'per_page': 100,
                    'unique': true
                }}).then(function (response) {
                    this.requirementOptions = _.uniq(_.pluck(response.body.data, 'name'));
                });
            },
            getCosts(){
                return this.$http.get('costs', { params: {
                    'assignment': 'trips',
                    'per_page': 100,
                    'unique': true
                }}).then(function (response) {
                    this.dueOptions = _.uniq(_.pluck(response.body.data, 'name'));
                });
            }

        },
        ready(){
            let promises = [];
            // populate
            promises.push(this.getGroups());
            promises.push(this.getCampaigns());
            promises.push(this.getCosts());
            promises.push(this.getRequirements());
            if (this.isAdminRoute)
                promises.push(this.getTodos());
            if (this.isAdminRoute)
                promises.push(this.getReps());

        }
    }
</script>