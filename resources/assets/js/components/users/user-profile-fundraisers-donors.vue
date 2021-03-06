<template>
    <div style="position:relative">
        <spinner v-ref:spinner size="sm" text="Loading"></spinner>
        <div v-if="display && donors.length > 0">
            <div class="btn-group btn-group-sm" role="group" aria-label="...">
                <div class="btn-group btn-group-sm" role="group">
                    <button type="button" class="btn btn-default" :class="{'btn-primary': activeView === 'donors'}" @click="toggleView('donors')">Donors</button>
                </div>
                <div class="btn-group btn-group-sm" role="group">
                    <button type="button" class="btn btn-default" :class="{'btn-primary': activeView === 'donations'}" @click="toggleView('donations')">Donations</button>
                </div>
            </div>

            <hr class="divider inv sm">
            <template v-if="activeView==='donors'">
                <div class="panel panel-default" v-for="donor in donors">
                    <div class="panel-heading" role="tab" id="heading-{{ donor.id }}">
                        <h5 class="text-capitalize">
                            <a role="button" :href="'/'+donor.account_url" v-if="donor.account_url">
                                {{ donor.name }} <span class="small">{{donor.total_donated|currency}}</span>
                            </a>
                            <span v-else>
                                {{ donor.name }} <span class="small">{{donor.total_donated|currency}}</span>
                            </span>
                        </h5>
                    </div>
                </div>
            </template>

            <template v-if="activeView === 'donations'">
                <div class="panel panel-default" v-for="donation in donations">
                    <div class="panel-heading" role="tab" id="heading-{{ donation.id }}">
                        <h5>
                            <span class="text-success">{{ donation.amount|currency }}</span> was donated<br>
                            <small class="small">by 
                                <a class="text-capitalize" 
                                   :href="'/'+donation.donor.data.account_url" 
                                   v-if="!donation.anonymous && donation.donor.data.account_url">
                                    {{ donation.name }}
                                </a>
                                <span v-if="!donation.anonymous && !donation.donor.data.account_url">
                                    {{ donation.name }}
                                </span>
                                <span v-if="donation.anonymous">an anonymous donor</span>
                                on {{ donation.created_at|moment 'll'}}
                            </small>
                            <br /><small>{{ donation.details.comment }}</small>
                        </h5>
                    </div>
                </div>
            </template>


            <div class="row">
                <div class="col-sm-12 text-center">
                    <nav>
                        <ul class="pagination pagination-sm">
                            <li>
                                <a>{{ pagination.total }} {{ activeView === 'donors' ? 'Donors' : 'Donations' }}</a>
                            </li>
                            <li :class="{ 'disabled': pagination.current_page == 1 }">
                                <a aria-label="Previous" @click="prevPage()">
                                    <span aria-hidden="true">&laquo; Back</span>
                                </a>
                            </li>
                            <!--<li :class="{ 'active': (n+1) == pagination.current_page}" v-for="n in pagination.total_pages"><a @click="page=(n+1)">{{(n+1)}}</a></li>-->
                            <li :class="{ 'disabled': pagination.current_page == pagination.total_pages }">
                                <a aria-label="Next" @click="nextPage()">
                                    <span aria-hidden="true">Next &raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    var marked = require('marked');
    export default{
        name: 'user-profile-fundraisers-donors',
        props: ['id'],
        data(){
            return {
                display: true,
                donors: [],
                donations: [],
                activeView: 'donors',

                // pagination vars
                page: 1,
                per_page: 10,
                pagination: {current_page: 1},
            }
        },
        filters: {
            marked: marked,
        },
        watch: {
            'page': function (val, oldVal) {
                
                if (this.activeView == 'donors') {
                    this.searchDonors();
                } else {
                    this.searchDonations();
                }
            },
        },
        methods: {
            nextPage()
            {
                if(this.pagination.current_page != this.pagination.total_pages) {
                    this.page = this.pagination.current_page + 1;
                }
            },
            prevPage()
            {
                if(this.pagination.current_page != 1) {
                    this.page = this.pagination.current_page - 1;
                }
            },
            toggleView(view){
                switch (view) {
                    case 'donors':
                        this.searchDonors();
                        break;
                    case 'donations':
                        this.searchDonations();
                        break;
                }
                this.activeView = view;
                this.page = 1;
            },
            searchDonors(){
                this.$http.get('fundraisers/'+ this.id + '/donors', { params: {
                    id: this.id,
                    per_page: this.per_page,
                    page: this.page
                }}).then(function (response) {
                    this.donors = _.toArray(response.body.data);
                    this.pagination = response.body.meta.pagination;
                });
            },
            searchDonations(){
                this.$http.get('fundraisers/'+ this.id + '/donations', { params: {
                    id: this.id, 
                    include: 'donor',
                    per_page: this.per_page,
                    page: this.page
                }}).then(function (response) {
                    this.donations = _.toArray(response.body.data);
                    this.pagination = response.body.meta.pagination;
                });
            }
        },
        ready(){
            this.$root.$on('Fundraiser:DisplayDonors', function (display) {
                this.display = display;

                if (this.display) {
                    this.searchDonors();
                }
            }.bind(this));

            if (this.display) {
                this.searchDonors();
            }
        }
    }
</script>
