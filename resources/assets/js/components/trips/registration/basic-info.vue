<template xmlns:v-validate="http://www.w3.org/1999/xhtml">
	<div class="row">
		<div class="col-sm-12">
			<validator name="BasicInfo" @valid="onValid">
				<form novalidate name="BasicInfoForm" id="BasicInfoForm">
					<template v-if="forAdmin">
						<div class="col-sm-12">
							<div class="form-group" :class="{ 'has-error': checkForError('manager') }">
								<label for="infoManager">Reservation Manager</label>
								<v-select @keydown.enter.prevent="" class="form-control" id="infoManager" :value.sync="userObj" :options="usersArr" :on-search="getUsers" label="name"></v-select>
								<select hidden name="manager" id="infoManager" class="hidden" v-model="user_id" v-validate:manager="{ required: true }">
									<option :value="user.id" v-for="user in usersArr">{{user.name}}</option>
								</select>
							</div>
						</div>
					</template>
					<!--<template>-->
						<div class="col-sm-12">
							<div class="checkbox">
								<label>
									<input type="checkbox" v-model="onBehalf" @change="toggleUserData">
									This reservation is for someone else.
								</label>
							</div>
						</div>
					<!--</template>-->

					<div class="col-md-6">
						<div class="form-group" :class="{ 'has-error': checkForError('role') }">
							<label for="desiredRole">Desired Team Role</label>
								<select class="form-control input-sm" id="desiredRole" v-model="desired_role" v-validate:role="{ required: true }">
									<option v-for="role in roles" :value="{value: role.value, name: role.name}">{{role.name}}</option>
								</select>
						</div><!-- end form-group -->
						<label>Given Names</label>
						<div class="row">
							<div class="col-sm-12">
								<div class="form-group" :class="{ 'has-error': checkForError('firstName') }">
									<!--<label for="infoFirstName">First</label>-->
									<input type="text" class="form-control input-sm" v-model="firstName"
										   v-validate:firstName="{ required: true }" :classes="{ invalid: 'has-error' }" placeholder="First & Middle Names"
										   id="infoFirstName">
								</div>
							</div>
						</div>
						<label>Surname</label>
						<div class="row">
							<div class="col-sm-12">
								<div class="form-group" :class="{ 'has-error': checkForError('lastName') }">
									<!--<label for="infoLastName">Last</label>-->
									<input type="text" class="form-control input-sm" v-model="lastName"
										   v-validate:lastName="{ required: true }" :classes="{ invalid: 'has-error' }" placeholder="Last Name"
										   id="infoLastName">
								</div>
							</div>
						</div>

						<div class="form-group" :class="{ 'has-error': (checkForError('email')) || ($BasicInfo.email.email && $BasicInfo.email.dirty) }">
							<label for="infoEmailAddress">Email Address</label>
							<input type="text" class="form-control input-sm" v-model="email" id="infoEmailAddress"
								   :classes="{ invalid: 'has-error' }" v-validate:email="['required', 'email']">
							<span class="help-block" v-show="$BasicInfo.email.email && $BasicInfo.email.dirty">Invalid email address</span>
						</div>

						<label>Date of Birth</label>
						<div class="row">
							<div class="col-sm-4">
								<div class="form-group" :class="{ 'has-error': checkForError('dobMonth') }">
									<!--<label for="infoDobMonth">Month</label>-->
									<select class="form-control input-sm" v-model="dobMonth"
											v-validate:dobMonth="{ required: true }" :classes="{ invalid: 'has-error' }" id="infoDobMonth">
										<option value="">Month</option>
										<option value="01">January</option>
										<option value="02">February</option>
										<option value="03">March</option>
										<option value="04">April</option>
										<option value="05">May</option>
										<option value="06">June</option>
										<option value="07">July</option>
										<option value="08">August</option>
										<option value="09">September</option>
										<option value="10">October</option>
										<option value="11">November</option>
										<option value="12">December</option>
									</select>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="form-group" :class="{ 'has-error': checkForError('dobDay') }">
									<!--<label for="infoDobDay">Day</label>-->
									<select class="form-control input-sm" v-model="dobDay"
											v-validate:dobDay="{ required: true }" :classes="{ invalid: 'has-error' }" id="infoDobDay">
										<option value="">Day</option>
										<option value="01">01</option>
										<option value="02">02</option>
										<option value="03">03</option>
										<option value="04">04</option>
										<option value="05">05</option>
										<option value="06">06</option>
										<option value="07">07</option>
										<option value="08">08</option>
										<option value="09">09</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
										<option value="21">21</option>
										<option value="22">22</option>
										<option value="23">23</option>
										<option value="24">24</option>
										<option value="25">25</option>
										<option value="26">26</option>
										<option value="27">27</option>
										<option value="28">28</option>
										<option value="29">29</option>
										<option value="30">30</option>
										<option value="31">31</option>
									</select>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="form-group" :class="{ 'has-error': checkForError('dobYear') }">
									<!--<label for="infoDobYear">Year</label>-->
									<select class="form-control input-sm" v-model="dobYearCalc"
											v-validate:dobYear="{ required: true }" :classes="{ invalid: 'has-error' }" id="infoDobYear">
										<option value="">Year</option>
										<option v-for="n in 100 | orderBy true -1" :value="n">
											{{ currentYear - 100 + n }}
										</option>
									</select>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-6">
								<label>Gender</label>
								<div :class="{ 'has-error': checkForError('gender') }">
									<label>
										<input type="radio" v-model="gender" v-validate:gender="{ required: { rule: true} }"
											   value="male"> Male
									</label>
								</div>
								<div :class="{ 'has-error': checkForError('gender') }">
									<label>
										<input type="radio" v-model="gender" v-validate:gender="{ required: { rule: true} }" value="female"> Female
									</label>
								</div>
								<span class="help-block" v-show="checkForError('gender')">Select a gender</span>

							</div>
							<div class="col-sm-6">
								<div class="form-group" :class="{ 'has-error': checkForError('relationshipStatus') }">
									<label for="infoRelStatus">Relationship Status</label>
									<select class="form-control input-sm" v-model="relationshipStatus"
											v-validate:relationshipStatus="{ required: true }" :classes="{ invalid: 'has-error' }" id="infoRelStatus">
										<option value="single">Single</option>
										<option value="engaged">Engaged</option>
										<option value="married">Married</option>
										<option value="divorced">Divorced</option>
										<option value="widowed">Widowed</option>

									</select>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-12">
								<div class="row">
									<div class="col-sm-12">
										<label for="infoHeightA">Height</label>
									</div>
									<div class="col-sm-6">
										<div class="form-group" :class="{ 'has-error': checkForError('heightA') }">
											<div class="input-group input-group-sm">
												<input type="number" class="form-control" id="infoHeightA" v-model="heightA" number min="0" max="10" v-validate:heightA="{ required: true }" :classes="{ invalid: 'has-error' }">
												<div class="input-group-addon" v-text="heightUnitA"></div>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="form-group" :class="{ 'has-error': checkForError('heightB') }">
											<div class="input-group input-group-sm">
												<input type="number" class="form-control"  v-model="heightB" number min="0" max="11" v-validate:heightB="{ required: true }" :classes="{ invalid: 'has-error' }">
												<div class="input-group-addon" v-text="heightUnitB"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-6">
								<div class="form-group" :class="{ 'has-error': checkForError('weight') }">
									<label for="infoWeight">Weight</label>
									<div class="input-group input-group-sm">
										<input type="number" class="form-control" id="infoWeight" v-model="weight" number min="0" v-validate:weight="{ required: true }" :classes="{ invalid: 'has-error' }">
										<div class="input-group-addon" v-text="weightUnit"></div>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group" :class="{ 'has-error': checkForError('size') }">
									<label for="infoShirtSize">Shirt Sizes</label>
									<select class="form-control input-sm" v-model="size" v-validate:size="{ required: true }" :classes="{ invalid: 'has-error' }"
											id="infoShirtSize">
										<option value="XS">XS (Extra Small)</option>
										<option value="S">S (Small)</option>
										<option value="M">M (Medium)</option>
										<option value="L">L (Large)</option>
										<option value="XL">XL (Extra Large)</option>
										<option value="XXL">XXL (2 Extra Large)</option>
										<option value="XXXL">XXXL (3 Extra Large)</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group" :class="{ 'has-error': checkForError('address') }">
							<label for="infoAddress">Address</label>
							<input type="text" class="form-control input-sm" v-model="address"
								   v-validate:address="{ required: true }" :classes="{ invalid: 'has-error' }" id="infoAddress"
								   placeholder="Street Address">
						</div>

						<div class="row">
							<div class="col-sm-12">
								<div class="form-group" :class="{ 'has-error': checkForError('city') }">
									<label for="infoCity">City</label>
									<input type="text" class="form-control input-sm" v-model="city"
										   v-validate:city="{ required: true }" :classes="{ invalid: 'has-error' }" id="infoCity" placeholder="">
								</div>
							</div>
							<div class="col-sm-12">
								<div class="form-group" :class="{ 'has-error': checkForError('state') }">
									<label for="infoState">State/Prov.</label>
									<input type="text" class="form-control input-sm" v-model="state"
										   v-validate:state="{ required: true }" :classes="{ invalid: 'has-error' }" id="infoState" placeholder="">
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-6">
								<div class="form-group" :class="{ 'has-error': checkForError('zip') }">
									<label for="infoZip">Zip/Postal Code</label>
									<input type="text" class="form-control input-sm" v-model="zipCode"
										   v-validate:zip="{ required: true }" :classes="{ invalid: 'has-error' }" id="infoZip" placeholder="12345">
								</div>
							</div>
							<div class="col-sm-12">
								<div class="form-group" :class="{ 'has-error': checkForError('country') }">
									<label for="infoCountry">Country</label>
									<v-select @keydown.enter.prevent="" class="form-control" id="infoCountry" :value.sync="countryCodeObj" :options="countries" label="name"></v-select>
									<select hidden name="country" id="infoCountry" class="hidden" v-model="country" v-validate:country="{ required: true }">
										<option :value="country.code" v-for="country in countries">{{country.name}}</option>
									</select>
								</div>
							</div>
						</div>

						<div class="form-group" :class="{ 'has-error': checkForError('phone') }">
							<label for="infoPhone">Home Phone</label>
							<input type="text" class="form-control input-sm" v-model="phone | phone"
								   v-validate:phone="{ required: true, minlength:10 }" :classes="{ invalid: 'has-error' }" id="infoPhone" placeholder="123-456-7890">
						</div>

						<div class="form-group" :class="{ 'has-error': checkForError('mobile') }">
							<label for="infoMobile">Cell Phone</label>
							<input type="text" class="form-control input-sm" v-model="mobile | phone"
								   v-validate:mobile="{ required: true, minlength:10 }" :classes="{ invalid: 'has-error'}" id="infoMobile" placeholder="123-456-7890">
						</div>
					</div>
				</form>
			</validator>
		</div>
	</div>
</template>
<script type="text/javascript">
	import vSelect from "vue-select";
	export default{
		name: 'basic-info',
		props: {
			forAdmin: {
				type: Boolean,
				default: false
			}
		},
		components: {vSelect},
		data(){
			return {
				title: 'Basic Traveler Information',
				currentYear: new Date().getFullYear(),
				dobYearCalc: '',
				attemptedContinue: false,
				roles: [],
				countries: [],
				usersArr: [],
				countryCodeObj: null,
				userObj: null,
				user_id: null,
				onBehalf: false,

				// basic info data
				desired_role: {value: 'MISS', name: 'Missionary'},
				address: null,
				city: null,
				state: null,
				zipCode: null,
				phone: '',
				mobile: '',
				firstName: null,
				lastName: null,
				email: null,
				dobDay: '',
				dobMonth: '',
				dobYear: null,
				gender: null,
				relationshipStatus: 'single',
				size: null,
				height: null,
				heightA: null,
				heightB: null,
				weight: null,
				avatar_upload_id: null,
				userInfo: {}
			}
		},
		computed: {
			heightUnitA() {
				if (this.country == 'us')
					return 'ft';

				return 'm';
			},
			heightUnitB() {
				if (this.country == 'us')
					return 'in';

				return 'cm';
			},
			weightUnit() {
				if (this.country == 'us')
					return 'lbs';

				return 'kg';
			},
			country(){
				return _.isObject(this.countryCodeObj) ? this.countryCodeObj.code : null;
			},
			user_id(){
				if (this.$parent.hasOwnProperty('userData') && _.isObject(this.userObj)) {
					this.$parent.userData = this.userObj;

                }
				return  _.isObject(this.userObj) ? this.userObj.id : null;
			},
			dobYear(){
				return (this.currentYear - 100 + parseInt(this.dobYearCalc));
			},
			height(){
				return this.heightA + ' ft. ' + this.heightB + ' in.';
			},
			userInfo(){
				return {
					desired_role: this.desired_role,
					address: this.address,
					city: this.city,
					state: this.state,
					zipCode: this.zipCode,
					country: this.country,
					country_name: this.countryCodeObj.name,
					phone: this.phone,
					mobile: this.mobile,
					firstName: this.firstName,
					lastName: this.lastName,
					email: this.email,
					dobDay: this.dobDay,
					dobMonth: this.dobMonth,
					dobYear: this.dobYear,
					dob: moment(this.dobMonth + '-' + this.dobDay + '-' + this.dobYear, 'MM-DD-YYYY').format('LL'),
					gender: this.gender,
					relationshipStatus: this.relationshipStatus,
					size: this.size,
					height: this.height,
					heightUnitA: this.heightUnitA,
					heightUnitB: this.heightUnitB,
					heightA: this.heightA,
					heightB: this.heightB,
					weight: this.weight,
					weightUnit: this.weightUnit,
					avatar_upload_id: this.avatar_upload_id
				}
			}
		},
		watch: {
		    // fail safe for poor loading
		    '$parent.trip'(val){
                this.$http.get('utilities/team-roles').then(function (response) {
                    _.each(response.body.roles, function (name, key) {
                        if (_.contains(val.team_roles, key))
                            this.roles.push({ value: key, name: name});
                    }.bind(this));
                });
		    },
			'userObj'(val){
		        if (this.forAdmin) {
                    if (val && val.id) {
                        this.setLocalUserData();
                    } else {
                        this.toggleUserData()
                    }
                }
			}
		},
		methods: {
			onValid(){
				this.$parent.userInfo = this.userInfo;
			},
			checkForError(field){
				// if user clicked continue button while the field is invalid trigger error styles
				return this.$BasicInfo[field.toLowerCase()].invalid && this.attemptedContinue
			},
			getUsers(search, loading){
				loading ? loading(true) : void 0;
				this.$http.get('users', { params: { search: search} }).then(function (response) {
					this.usersArr = response.body.data;
					loading ? loading(false) : void 0;
				})
			},
			toggleUserData(){
				if (this.onBehalf) {
                    this.firstName = null;
                    this.lastName = null;
                    this.dobDay = '';
                    this.dobMonth = '';
                    this.dobYearCalc = '';
                    this.dobYear = '';
                    this.email = null;
                    this.gender = null;
                    this.address = null;
                    this.relationshipStatus = 'single';
                    this.phone = '';
                    this.mobile = '';
                    this.address = null;
                    this.state = null;
                    this.zipCode = null;
                    this.countryCodeObj = _.findWhere(this.countries, {code: "us"});
                    this.avatar_upload_id = null;
                } else {
				    this.setLocalUserData();
                }
			},
			setLocalUserData(){
                let user = this.forAdmin ? this.userObj : this.$parent.userData;
                let names = user.name.split(' ');
                this.firstName = _.first(names);
                this.lastName = names.length > 1 ? _.last(names) : null;

                let birthdays = user.birthday.split('-');
                this.dobDay = birthdays[2];
                this.dobMonth = birthdays[1];
                this.dobYearCalc = (parseInt(birthdays[0]) - this.currentYear + 100).toString();

                this.email = user.email;
                this.gender = user.gender ? user.gender.toLowerCase() : null;
                this.address = user.address;
                this.relationshipStatus = user.status ? user.status.toLowerCase() : 'single';
                this.phone = user.phone_one;
                this.mobile = user.phone_two;
                this.address = user.address;
                this.city = user.city;
                this.state = user.state;
                this.zipCode = user.zip;
                this.size = user.shirt_size;
                this.countryCodeObj = _.findWhere(this.countries, {code: user.country_code});
                this.avatar_upload_id = user.avatar_upload_id;
			}
		},
		activate(done){
			if (this.forAdmin) {
				this.onBehalf = true;
			}

			this.$http.get('utilities/countries').then(function (response) {
				this.countries = response.body.countries;
				this.toggleUserData();
			});

			this.$http.get('utilities/team-roles').then(function (response) {
				_.each(response.body.roles, function (name, key) {
				    if (_.contains(this.$parent.trip.team_roles, key))
						this.roles.push({ value: key, name: name});
				}.bind(this));
			});

			this.$dispatch('basic-info', true);
			if (location.pathname.indexOf('admin') === -1)
				$('html, body').animate({scrollTop: 200}, 300);
			done();
		}
	}
</script>
