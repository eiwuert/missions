<template>
	<div>
		<div class="panel panel-default" v-if="transport">
			<div class="panel-heading">
				<h3 class="panel-title" v-text="transport.name"></h3>
				<p class="small">
					<i class="fa" :class="{ 'fa-bus': transport.type === 'bus', 'fa-plane': transport.type === 'flight', 'fa-car': transport.type === 'vehicle', 'fa-train': transport.type === 'train'}"></i>
					{{ transport.type | capitalize }}
					<span class="label label-default" v-text="transport.domestic ? 'Domestic' : 'International'"></span>
				</p>
			</div>
			<div class="panel-body">
				<div class="row">
					<div class="col-sm-4"><b>Vessel No.</b> {{transport.vessel_no}}</div>
					<div class="col-sm-4"><b>Call Sign</b> {{transport.call_sign}}</div>
					<div class="col-sm-4"><b>Capacity</b> {{transport.capacity}}</div>
				</div>
			</div>
		</div>
		<tabs>
			<tab header="Itinerary">
				<transports-details-itinerary :transport="transport"></transports-details-itinerary>
			</tab>
			<tab header="Passengers">
				<transports-details-passengers></transports-details-passengers>
			</tab>
			<tab header="Notes">
				<!--<notes type="teams"
				       :id="currentTeam.id"
				       :user_id="userId"
				       :per_page="5"
				       :can-modify="isAdminRoute ? 1 : 0">
				</notes>-->
			</tab>
		</tabs>

	</div>
</template>
<style></style>
<script type="text/javascript">
    import transportsDetailsItinerary from './transports-details-itinerary.vue';
    import transportsDetailsPassengers from './transports-details-passengers.vue';
    export default{
        name: 'transports-details',
        components: {transportsDetailsItinerary, transportsDetailsPassengers},
        props: {
            campaignId: {
                type: String,
                required: true
            },
            transportId: {
                type: String,
                required: true
            },
        },
        data(){
            return {
                validatorHandle: 'TransportsDetailsModal',
                transport: null,

                TransportsResource: this.$resource('transports{/transport}')
            }
        },
        methods: {
            getTransport() {
                return this.TransportsResource.get({ transport: this.transportId }).then(function (response) {
	                this.transport = response.body.data;
                });
            }
        },
        ready(){
			this.getTransport();
        }
    }
</script>