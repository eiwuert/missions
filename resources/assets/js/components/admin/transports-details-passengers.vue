<template>
	<div>
		<aside :show.sync="showPassengersFilters" placement="left" header="Passengers Filters" :width="375">
			<reservations-filters v-ref:filters :filters.sync="passengersFilters" :reset-callback="resetPassengerFilters" :pagination="passengersPagination" :callback="getPassengers" storage="" teams></reservations-filters>
		</aside>
		<aside :show.sync="showReservationsFilters" placement="left" header="Reservations Filters" :width="375">
			<reservations-filters v-ref:filters :filters.sync="reservationFilters" :reset-callback="resetReservationFilters" :pagination="reservationsPagination" :callback="searchReservations" storage="" teams></reservations-filters>
		</aside>

		<div class="row">
			<!-- Passengers List -->
			<div class="col-sm-8">
				<form class="form-inline row">
					<div class="input-group input-group-sm col-sm-7">
						<input type="text" class="form-control" v-model="passengersFilters.search" debounce="300" placeholder="Search">
						<span class="input-group-addon"><i class="fa fa-search"></i></span>
					</div>
					<div class="form-group col-sm-5">
						<button class="btn btn-default btn-sm" @click="showPassengersFilters = true;">Filters</button>
					</div>
					<div class="col-xs-12">
						<hr class="divider inv">
						<div>
							<label>Active Filters</label>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.type != ''" @click="reservationFilters.type = ''" >
									Trip Type
									<i class="fa fa-close"></i>
								</span>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.groups.length" @click="reservationFilters.groups = []" >
									Travel Group
									<i class="fa fa-close"></i>
								</span>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.hasCompanions !== null" @click="reservationFilters.hasCompanions = null" >
									Companions
									<i class="fa fa-close"></i>
								</span>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.role !== ''" @click="reservationFilters.role = ''" >
									Role
									<i class="fa fa-close"></i>
								</span>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.gender != ''" @click="reservationFilters.gender = ''" >
									Gender
									<i class="fa fa-close"></i>
								</span>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.status != ''" @click="reservationFilters.status = ''" >
									Status
									<i class="fa fa-close"></i>
								</span>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.age[0] != 0" @click="reservationFilters.age[0] = 0" >
									Min. Age
									<i class="fa fa-close"></i>
								</span>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.age[1] != 120" @click="reservationFilters.age[1] = 120" >
									Max. Age
									<i class="fa fa-close"></i>
								</span>
						</div>
					</div>
				</form>
				<div class="panel-group" id="PassengerAccordion" role="tablist" aria-multiselectable="true">
					<div class="panel panel-default" v-for="passenger in passengers">
						<div class="panel-heading" role="tab" id="headingOne">
							<h4 class="panel-title">
								<div class="row">
									<div class="col-xs-9">
										<div class="media">
											<div class="media-left" style="padding-right:0;">
												<a :href="'/admin/reservations/' + passenger.reservation.id" target="_blank">
													<img :src="passenger.reservation.avatar" class="img-circle img-xs av-left" style="margin-right: 10px">
												</a>
											</div>
											<div class="media-body" style="vertical-align:middle;">
												<h6 class="media-heading text-capitalize" style="margin-bottom:3px;">
													<i :class="getGenderStatusIcon(passenger)"></i>
													<a :href="'/admin/reservations/' + reservation.id" target="_blank">{{ passenger.reservation.surname | capitalize }}, {{ passenger.reservation.given_names | capitalize }}</a></h6>
												<p style="line-height:1;font-size:10px;margin-bottom:2px;">{{ passenger.reservation.desired_role.name }} <span class="text-muted">&middot; {{ passenger.reservation.travel_group}}</span></p>
											</div><!-- end media-body -->
										</div><!-- end media -->
									</div>
									<div class="col-xs-3 text-right action-buttons">
										<dropdown type="default">
											<button slot="button" type="button" class="btn btn-xs btn-primary-hollow dropdown-toggle">
												<span class="fa fa-ellipsis-h"></span>
											</button>
											<ul slot="dropdown-menu" class="dropdown-menu dropdown-menu-right">
												<template v-for="subSquad in currentSquadGroups | orderBy 'callsign'">
													<template v-if="subSquad.callsign !== 'Squad Leaders'">
														<li :class="{'disabled': isLocked}" v-if="canAssignToTeamLeaders(subSquad)"><a @click="moveToSquad(passenger, squad, subSquad, false)">Move to Squad Leaders</a></li>
														<li :class="{'disabled': isLocked}" v-if="canAssignToPassenger(subSquad, subSquad)"><a @click="moveToSquad(passenger, squad, subSquad, true)" v-text="'Move to ' + subSquad.callsign + ' as leader'"></a></li>
														<li :class="{'disabled': isLocked}" v-if="canAssignToSquad(subSquad)"><a @click="moveToSquad(passenger, squad, subSquad, false)" v-text="'Move to ' + subSquad.callsign"></a></li>
													</template>
												</template>
												<li :class="{'disabled': isLocked}" role="separator" class="divider"></li>
												<!--<li :class="{'disabled': isLocked}" v-if="passenger && passenger.reservation.leader"><a @click="demoteToPassenger(passenger, squad)">Demote to Group Passenger</a></li>-->
												<!--<li :class="{'disabled': isLocked}" v-if="passenger && !passenger.reservation.leader && !squadHasLeader(squad)"<a @click="promoteToLeader(passenger, squad)">Promote to Group Leader</a></li>-->
												<li :class="{'disabled': isLocked}"><a @click="removeFromSquad(passenger, squad)">Remove</a></li>
											</ul>
										</dropdown>
										<a class="btn btn-xs btn-default-hollow" role="button" data-toggle="collapse" data-parent="#PassengerAccordion" :href="'#squadLeaderItem' + $index" aria-expanded="true" aria-controls="collapseOne">
											<i class="fa fa-angle-down"></i>
										</a>
									</div>
								</div>
							</h4>
						</div>
						<div :id="'squadLeaderItem' + $index" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
							<div class="panel-body">
								<div class="row">
									<div class="col-sm-6">
										<label>Gender</label>
										<p class="small">{{passenger.reservation.gender | capitalize}}</p>
										<label>Marital Status</label>
										<p class="small">{{passenger.reservation.status | capitalize}}</p>
									</div><!-- end col -->
									<div class="col-sm-6">
										<label>Age</label>
										<p class="small">{{passenger.reservation.age}}</p>
										<label>Travel Group</label>
										<p class="small">{{passenger.reservation.trip.data.group.data.name}}</p>
									</div><!-- end col -->
								</div><!-- end row -->
								<div class="col-sm-12">
									<label>Companions</label>
									<ul class="list-unstyled" v-if="passenger.reservation.companions.data.length">
										<li v-for="companion in passenger.reservation.companions.data">
											<i :class="getGenderStatusIcon(companion)"></i>
											{{ companion.surname | capitalize }}, {{ companion.given_names | capitalize }}
											<span class="text-muted">({{ companion.relationship | capitalize }})</span>
										</li>
									</ul>
									<p class="small" v-else>None</p>
								</div>
								<div class="col-sm-6">
									<label>Trip Type</label>
									<p class="small">{{passenger.reservation.trip.data.type | capitalize}}</p>
								</div>
								<div class="col-sm-6">
									<label>Designation</label>
									<p class="small">{{ passenger.reservation.arrival_designation }}</p>
								</div>
							</div>
						</div>
						<div class="panel-footer small clearfix" style="background-color: #ffe000;" v-if="passenger.reservation.companions.data.length && companionsPresentSquad(passenger, squad)">
							<i class=" fa fa-info-circle"></i> {{passenger.reservation.present_companions}} companions not in group &middot; {{companionsPresentTeam(passenger)}} not on this squad.
							<button type="button" class="btn btn-xs btn-default-hollow pull-right" @click="addCompanionsToSquad(passenger, squad)"><i class="fa fa-plus-circle"></i> Companions</button>
						</div>
					</div>
				</div>

			</div>
			<!-- Reservations List -->
			<div class="col-sm-4">
				<form class="form-inline row">
					<div class="input-group input-group-sm col-sm-7">
						<input type="text" class="form-control" v-model="reservationFilters.search" debounce="300" placeholder="Search">
						<span class="input-group-addon"><i class="fa fa-search"></i></span>
					</div>

					<div class="form-group col-sm-5">
						<button class="btn btn-default btn-sm" @click="showReservationsFilters = true;">Filters</button>
					</div>
					<div class="col-xs-12">
						<hr class="divider inv">
						<div>
							<label>Active Filters</label>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.type != ''" @click="reservationFilters.type = ''" >
									Trip Type
									<i class="fa fa-close"></i>
								</span>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.groups.length" @click="reservationFilters.groups = []" >
									Travel Group
									<i class="fa fa-close"></i>
								</span>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.hasCompanions !== null" @click="reservationFilters.hasCompanions = null" >
									Companions
									<i class="fa fa-close"></i>
								</span>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.role !== ''" @click="reservationFilters.role = ''" >
									Role
									<i class="fa fa-close"></i>
								</span>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.gender != ''" @click="reservationFilters.gender = ''" >
									Gender
									<i class="fa fa-close"></i>
								</span>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.status != ''" @click="reservationFilters.status = ''" >
									Status
									<i class="fa fa-close"></i>
								</span>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.age[0] != 0" @click="reservationFilters.age[0] = 0" >
									Min. Age
									<i class="fa fa-close"></i>
								</span>
							<span style="margin-right:2px;" class="label label-default" v-show="reservationFilters.age[1] != 120" @click="reservationFilters.age[1] = 120" >
									Max. Age
									<i class="fa fa-close"></i>
								</span>
						</div>
					</div>

				</form>
				<!-- Reservation Lists and Pagination -->
				<div class="row">
					<div class="col-xs-12">
						<div class="panel-group" id="reservationsAccordion" role="tablist" aria-multiselectable="true">
							<div class="panel panel-default" v-for="reservation in reservations">
								<div class="panel-heading" role="tab" id="headingOne">
									<h4 class="panel-title">
										<div class="row">
											<div class="col-xs-9">
												<div class="media">
													<div class="media-left" style="padding-right:0;">
														<a :href="'/admin/reservations/' + reservation.id" target="_blank">
															<img :src="reservation.avatar" class="img-circle img-xs av-left" style="margin-right: 10px">
														</a>
													</div>
													<div class="media-body" style="vertical-align:middle;">
														<h6 class="media-heading text-capitalize" style="margin-bottom:3px;">
															<i :class="getGenderStatusIcon(reservation)"></i>
															<a :href="'/admin/reservations/' + reservation.id" target="_blank">
																{{ reservation.surname | capitalize }}, {{ reservation.given_names | capitalize }}</a></h6>
														<p style="line-height:1;font-size:10px;margin-bottom:2px;">{{ reservation.desired_role.name }} <span class="text-muted">&middot; {{ reservation.trip.data.group.data.name }}</span></p>
													</div><!-- end media-body -->
												</div><!-- end media -->
											</div>
											<div class="col-xs-3 text-right action-buttons">
												<dropdown type="default">
													<button slot="button" type="button" class="btn btn-xs btn-primary-hollow dropdown-toggle">
														<span class="fa fa-ellipsis-h"></span>
													</button>
													<ul slot="dropdown-menu" class="dropdown-menu dropdown-menu-right">
														<li class="dropdown-header">Assign To Squad</li>
														<li role="separator" class="divider"></li>
														<template v-for="squad in currentSquadGroups | orderBy 'callsign'">
															<template v-if="squad.callsign === 'Squad Leaders'">
																<li :class="{'disabled': isLocked}" v-if="canAssignToTeamLeaders(squad) && isLeadership(reservation)"><a @click="assignToSquad(reservation, squad, false)">Squad Leader</a></li>
															</template>
															<template v-else>
																<li :class="{'disabled': isLocked}" v-if="canAssignToPassenger(squad) && isLeadership(reservation)"><a @click="assignToSquad(reservation, squad, true)" v-text="squad.callsign + ' Leader'"></a></li>
																<li :class="{'disabled': isLocked}" v-if="canAssignToSquad(squad)"><a @click="assignToSquad(reservation, squad, false)" v-text="squad.callsign"></a></li>
															</template>
														</template>
														<li role="separator" class="divider"></li>
														<li class="dropdown-header">Change Role</li>
														<li role="separator" class="divider"></li>
														<li v-if="reservation.desired_role.name !== 'Squad Leader'"><a @click="updateRole(reservation, 'Squad Leader')">Squad Leader</a></li>
														<li v-if="reservation.desired_role.name !== 'Group Leader'"><a @click="updateRole(reservation, 'Group Leader')">Group Leader</a></li>

													</ul>
												</dropdown>
												<a class="btn btn-xs btn-default-hollow" role="button" data-toggle="collapse" data-parent="#reservationsAccordion" :href="'#reservationItem' + $index" aria-expanded="true" aria-controls="collapseOne">
													<i class="fa fa-angle-down"></i>
												</a>
											</div>
										</div>

									</h4>
								</div>
								<div :id="'reservationItem' + $index" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
									<div class="panel-body">
										<div class="row">
											<div class="col-sm-6">
												<label>Gender</label>
												<p class="small">{{reservation.gender | capitalize}}</p>
												<label>Marital Status</label>
												<p class="small">{{reservation.status | capitalize}}</p>
											</div><!-- end col -->
											<div class="col-sm-6">
												<label>Age</label>
												<p class="small">{{reservation.age}}</p>
												<label>Travel Group</label>
												<p class="small">{{reservation.trip.data.group.data.name}}</p>
											</div><!-- end col -->
											<div class="col-sm-12">
												<label>Companions</label>
												<ul class="list-unstyled" v-if="reservation.companions.data.length">
													<li v-for="companion in reservation.companions.data">
														<i :class="getGenderStatusIcon(companion)"></i>
														{{ companion.surname | capitalize }}, {{ companion.given_names | capitalize }} <span class="text-muted">({{ companion.relationship | capitalize }})</span>
													</li>
												</ul>
												<p class="small" v-else>None</p>
											</div>
											<div class="col-sm-6">
												<label>Trip Type</label>
												<p class="small">{{reservation.trip.data.type | capitalize}}</p>
											</div>
											<div class="col-sm-6">
												<label>Designation</label>
												<p class="small">{{reservation.arrival_designation | capitalize}}</p>
											</div>
										</div><!-- end row -->
									</div>
								</div>
								<div class="panel-footer" v-if="reservation.companions.data.length">
									I have {{reservation.companions.data.length}} companions.
								</div>
							</div>
						</div>
						<div class="col-sm-12 text-center">
							<pagination :pagination.sync="reservationsPagination" :callback="searchReservations"></pagination>
						</div>
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
    import reservationsFilters from '../filters/reservations-filters.vue'
    export default{
        name: 'transports-details-passengers',
//        mixins: [errorHandler, utilities],
	    components: {vSelect, reservationsFilters},
	    props: ['transport', 'campaignId'],
        data(){
            return {
                showPassengersFilters: false,
                showReservationsFilters: false,
                passengers: [],
                passengersPagination: { current_page: 1 },
                reservations: [],
                reservationsPagination: { current_page: 1 },
	            passengersFilters: {
                    search: '',
	            },
                reservationFilters: {
                    type: '',
                    groups: [],
                    gender: '',
                    status: '',
                    hasCompanions: null,
                    role: '',
                    designation: '',
                    age: [0, 120],
	                search: '',
                },

	            PassengersResource: this.$resource('transports{/transport}/passengers{/passenger}')
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
            resetPassengerFilters(){},
            resetReservationFilters(){},
            getGenderStatusIcon(reservation){
                if (reservation.gender == 'male') {
                    if (reservation.status == 'married') {
                        return 'fa fa-venus-mars text-info';
                    }
                    return 'fa fa-mars text-info';
                }

                if (reservation.status == 'married') {
                    return 'fa fa-venus-mars text-danger';
                }
                return 'fa fa-venus text-danger';
            },

            getPassengers() {
                let params = _.extend({ include: 'reservation.trip.campaign,reservation.trip.group,reservation.companions' }, this.passengersFilters);

                this.PassengersResource.get({ transport: this.transport.id}, params)
            },
            searchReservations(){
                let params = {
                    include: 'trip.campaign,trip.group,user,companions',
                    search: this.reservationFilters.search,
                    page: this.reservationsPagination.current_page,
                    current: true,
                    //ignore: this.excludeReservationIds,
                    //noSquad: true,
                    designation: this.reservationFilters.designation,
                };

                if (this.isAdminRoute) {
                    params.campaign = this.campaignId;
                } else {
                    params.campaign = this.campaignId;
                    //params.groups = new Array(this.groupId);
                    //params.trip = this.reservationsTrips.length ? this.reservationsTrips : new Array();
                }

                $.extend(params, this.reservationFilters);


                // this.$refs.spinner.show();
                return this.$http.get('reservations', { params: params, before: function(xhr) {
                    if (this.lastReservationRequest) {
                        this.lastReservationRequest.abort();
                    }
                    this.lastReservationRequest = xhr;
                } }).then(function (response) {
                    this.reservations = response.body.data;
                    this.reservationsPagination = response.body.meta.pagination;
                    // this.$refs.spinner.hide();
                }, function (error) {
                    // this.$refs.spinner.hide();
                    //TODO add error alert
                });
            },
        },
        ready(){
			this.getPassengers();
			this.searchReservations();
        }
    }
</script>