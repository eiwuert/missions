<template xmlns:v-validate="http://www.w3.org/1999/xhtml">
	<div style="position:relative;">
		<spinner v-ref:spinner size="sm" text="Loading"></spinner>
		<validator name="CreateUpdateMediaCredential" @touched="onTouched">
			<form id="CreateUpdateMediaCredential" class="form-horizontal">
				<div class="panel panel-default">
					<div class="panel-heading">
						<div class="row">
							<div class="col-xs-12">
								<h5 class="panel-header">Basic Information</h5>
							</div>
						</div>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-sm-6" v-error-handler="{ value: applicant_name, handle: 'name' }">
								<label for="name" class="control-label">Credential Holder's Name</label>
								<input type="text" class="form-control" name="name" id="name" v-model="applicant_name"
										       placeholder="Name" v-validate:name="{ required: true, minlength:1 }"
								       minlength="1" required>
							</div>
                            <div class="col-sm-6" v-if="forAdmin">
                                <div class="form-group" :class="{ 'has-error': checkForError('manager') }">
                                    <label for="infoManager">Record Manager</label>
                                    <v-select @keydown.enter.prevent="" class="form-control" id="infoManager" :value.sync="userObj" :options="usersArr" :on-search="getUsers" label="name"></v-select>
                                    <select hidden name="manager" id="infoManager" class="hidden" v-model="user_id" v-validate:manager="{ required: true }">
                                        <option :value="user.id" v-for="user in usersArr">{{user.name}}</option>
                                    </select>
                                </div>
                            </div>
						</div>
					</div>
				</div>

				<div v-for="(indexQA, QA) in content" v-show="checkConditions(QA)">

					<!-- start has type designation -->
					<template v-if="QA.type">

						<!-- radio -->
						<template v-if="QA.type === 'radio'">
							<div class="panel panel-default" v-error-handler="{ value: QA.a, client: ('radio' + indexQA), class: 'panel-danger has-error' }">
								<div class="panel-heading">
									<h5 v-text="QA.q"></h5>
								</div>
								<div class="panel-body">
									<label class="radio-inline" v-for="choice in QA.options">
										<input type="radio" :value="choice.value" v-model="QA.a" :field="'radio' + indexQA" v-validate="['required']"> {{ choice.name }}
                                    </label>
								</div>
								<div class="panel-footer" v-show="checkForError('radio' + indexQA)">
									<div class="errors-block"></div>
								</div>
							</div>
						</template>
						<!-- end radio -->

						<!-- checkbox -->
						<template v-if="QA.type === 'checkbox'">
							<template v-if="QA.id === 'role'">
								<!-- start roles checklist -->
								<div class="panel panel-default" v-error-handler="{ value: QA.options, handle: 'roles', class: 'panel-danger has-error', messages: { min: 'Please select at least one role.'} }">
									<div class="panel-heading">
										<h5 v-text="QA.q"></h5>
									</div>
									<div class="panel-body">
										<div class="row">
											<div class="checkbox col-sm-6 col-xs-12">
												<template v-for="choice in QA.options">
													<template v-if="$index % 2 == 0">
														<label>
															<input type="checkbox" v-model="choice.value" :checked.sync="choice.value" v-validate:roles="$index === 0 ? { minlength: 1} : void 0">
															{{ choice.name }}
														</label>
														<div v-if="choice.value">
															<div class="row" v-error-handler="{ value: choice.proficiency, client: 'proficiencyEven' + $index, messages: { req: 'Please select at proficiency level.'} }">
																<div class="col-md-2">
																	<span class="help-block">Proficiency: </span>
																</div>
																<div class="col-md-10">
																	<label class="radio-inline">
																		<input type="radio" :field="'proficiencyEven' + $index" v-validate="{ required: { rule: !!choice.value} }" value="beginner" v-model="choice.proficiency"> Beginner
																	</label>
																	<label class="radio-inline">
																		<input type="radio" :field="'proficiencyEven' + $index" v-validate value="intermediate" v-model="choice.proficiency"> Intermediate
																	</label>
																	<label class="radio-inline">
																		<input type="radio" :field="'proficiencyEven' + $index" v-validate value="expert" v-model="choice.proficiency"> Expert
																	</label>
																	<div class="errors-block"></div>
																</div>
															</div>
															<hr class="divider md">
														</div>
														<hr class="divider inv sm">
													</template>
												</template>
											</div>
											<div class="checkbox col-sm-6 col-xs-12">
												<template v-for="choice in QA.options">
													<template v-if="$index % 2 != 0">
														<label>
															<input type="checkbox" v-model="choice.value" :checked.sync="choice.value" :value="true" v-validate:roles>
															{{ choice.name }}
														</label>
														<div v-if="choice.value">
															<div class="row" v-error-handler="{ value: choice.proficiency, client: 'proficiencyOdd' + $index, messages: { req: 'Please select at proficiency level.'} }">
																<div class="col-md-2">
																	<span class="help-block">Proficiency:</span>
																</div>
																<div class="col-md-10">
																	<label class="radio-inline">
																		<input type="radio" :field="'proficiencyOdd' + $index" v-validate="{ required: { rule: !!choice.value} }" value="beginner" v-model="choice.proficiency"> Beginner
																	</label>
																	<label class="radio-inline">
																		<input type="radio" :field="'proficiencyOdd' + $index" v-validate value="intermediate" v-model="choice.proficiency"> Intermediate
																	</label>
																	<label class="radio-inline">
																		<input type="radio" :field="'proficiencyOdd' + $index" v-validate value="expert" v-model="choice.proficiency"> Expert
																	</label>
																	<div class="errors-block"></div>
																</div>
															</div>
															<hr class="divider md">
														</div>
														<hr class="divider inv sm">
													</template>
												</template>
											</div>
										</div>
									</div>
									<div class="panel-footer" v-show="checkForError('roles')">
										<div class="errors-block"></div>
									</div>
								</div>
								<!-- end roles checklist -->

							</template>
							<template v-if="QA.id === 'equipment'">
								<!-- start equipment checklist -->
								<div class="panel panel-default">
									<div class="panel-heading">
										<h5 v-text="QA.q"></h5>
									</div>
									<div class="panel-body">
										<div class="row">
											<div class="checkbox col-sm-6 col-xs-12">
												<template v-for="choice in QA.options">
													<template v-if="$index % 2 == 0">
														<label>
															<input type="checkbox" :checked.sync="choice.value" :value="true" v-model="choice.value"> {{ choice.name }}
														</label>
														<div v-if="choice.value" v-error-handler="{ value: choice.brand, client: ('brandEven' + $index), messages: { req: 'Please enter a brand or model name.'} }">
															<div class="input-group">
																<span class="input-group-addon input-sm">Brand/Model</span>
																<input class="form-control input-sm" type="text" v-model="choice.brand" :field="'brandEven' + $index" v-validate="['required']">
															</div>
															<hr class="divider md">
														</div>
														<hr class="divider inv sm">
													</template>
												</template>
											</div>
											<div class="checkbox col-sm-6 col-xs-12">
												<template v-for="choice in QA.options">
													<template v-if="$index % 2 != 0">
														<label>
															<input type="checkbox" :checked.sync="choice.value" :value="true" v-model="choice.value"> {{ choice.name }}
														</label>
														<div v-if="choice.value" v-error-handler="{ value: choice.brand, client: ('brandOdd' + $index), messages: { req: 'Please enter a brand or model name.'} }">
															<div class="input-group">
																<span class="input-group-addon input-sm">Brand/Model</span>
																<input class="form-control input-sm" type="text" v-model="choice.brand" :field="'brandOdd' + $index" v-validate="['required']">
															</div>
															<hr class="divider md">
														</div>
														<hr class="divider inv sm">
													</template>
												</template>
											</div>
										</div>
									</div>
								</div>
								<!-- end equipment checklist -->

							</template>
						</template>
						<!-- end check box -->

						<!-- textarea -->
						<template v-if="QA.type === 'textarea'">
							<div class="panel panel-default" v-error-handler="{ value: QA.a, client: ('textarea' + indexQA), class: 'panel-danger has-error', messages: { req: 'Please explain.'} }">
								<div class="panel-heading">
									<h5 v-text="QA.q"></h5>
								</div>
								<div class="panel-body">
									<span class="help-block">Please Explain:</span>
									<textarea class="form-control" v-model="QA.a" :field="'textarea' + indexQA" v-validate="{}"></textarea>
								</div>
								<div class="panel-footer" v-show="checkForError('textarea' + indexQA)">
									<div class="errors-block"></div>
								</div>
							</div>
						</template>
						<!-- end textarea -->

						<!-- url -->
						<!-- Validation doesn't support url input-->
						<template v-if="QA.type === 'url'">
							<div class="panel panel-default">
								<div class="panel-heading">
									<h5 v-text="QA.q"></h5>
								</div>
								<div class="panel-body">
									<span class="help-block">Provide link:</span>
									<input type="url" class="form-control" v-model="QA.a" :placeholder="QA.placeholder"></input>
								</div>
								<!--<div class="panel-footer" v-show="checkForError('url' + indexQA)">
									<div class="errors-block"></div>
								</div>-->
							</div>
						</template>
						<!-- end text -->

						<!-- start select -->
						<template v-if="QA.type === 'select'">
							<div class="panel panel-default" v-error-handler="{ value: QA.a, client: ('select' + indexQA), class: 'panel-danger has-error' }">
								<div class="panel-heading">
									<h5 v-text="QA.q"></h5>
								</div>
								<div class="panel-body">
									<select class="form-control" v-model="QA.a" :field="'select' + indexQA" v-validate="{}">
										<option value="">-- Select Role --</option>
										<option v-for="option in QA.options" :value="option.value">{{option.name}}</option>
									</select>
								</div>
								<div class="panel-footer" v-show="checkForError('select' + indexQA)">
									<div class="errors-block"></div>
								</div>
							</div>
						</template>
						<!-- end select -->

						<!-- start file -->
						<template v-if="QA.type === 'file'">
							<div class="panel panel-default">
								<div class="panel-heading">
									<h5 v-text="QA.q"></h5>
								</div>
								<div class="panel-body">
									<div class="row">
										<div class="col-xs-offset-1 col-xs-9">
											<ul class="list-group" v-if="uploads.length">
												<li class="list-group-item" v-for="upload in uploads">
													<i class="fa fa-file-pdf-o"></i> {{upload.name}}
                                                        <a class="badge" @click="confirmUploadNoteRemoval(upload)"><i class="fa fa-close"></i></a>
												</li>
											</ul>
											<upload-create-update v-show="uploads.length < 1" type="file" :lock-type="true" :ui-selector="2" :ui-locked="true" :is-child="true" :tags="['User']" button-text="Attach" :allow-name="false" :name="'credentials-professor-note-'+ today + '-' + uploadCounter"></upload-create-update>
										</div>
									</div>
								</div>
							</div>
						</template>
						<!-- end file -->

						<!-- start date -->
						<template v-if="QA.type === 'date'">
							<div class="panel panel-default" v-error-handler="{ value: QA.a, client: ('date' + indexQA), class: 'panel-danger has-error' }">
								<div class="panel-heading">
									<h5 v-text="QA.q"></h5>
								</div>
								<div class="panel-body">
									<date-picker :model.sync="QA.a|moment 'YYYY-MM-DD'" type="date" ></date-picker>
									<input type="datetime" class="form-control hidden" v-model="QA.a | moment 'LLLL'" id="started_at" required :field="'date' + indexQA" v-validate="{}">
								</div>
								<div class="panel-footer" v-show="checkForError('date' + indexQA)">
									<div class="errors-block"></div>
								</div>
							</div>
						</template>
						<!-- end date -->

					</template>
					<!-- end has type designation -->

					<!-- start no type designation -->
					<template v-else>
						<label class="control-label" v-text="QA.q"></label>
						<textarea class="form-control" v-model="QA.a" ></textarea>
					</template>
					<!-- end no type designation -->
				</div>

				<div class="panel panel-default">
					<div class="panel-heading">
						<h5 class="panel-header">Disclaimer</h5>

					</div>
					<div class="panel-body">
						<div class="checkbox" v-error-handler="{ value: disclaimer, handle: 'disclaimer' }">
							<label>
								<input type="checkbox" :checked.sync="disclaimer" v-model="disclaimer" v-validate:disclaimer="['required']">
								I agree that, Missions.Me is not responsible for any lost, stolen or broken equipment brought my your missions trip.
							</label>
						</div>
					</div>
				</div>

				<div class="form-group text-center">
					<div class="col-xs-12">
						<a v-if="!isUpdate" href="/dashboard/records/media-credentials" class="btn btn-default">Cancel</a>
						<a v-if="!isUpdate" @click="submit()" class="btn btn-primary">Create</a>
						<a v-if="isUpdate" @click="back()" class="btn btn-default">Cancel</a>
						<a v-if="isUpdate" @click="update()" class="btn btn-primary">Update</a>
					</div>
				</div>
			</form>

			<modal class="text-center" :show.sync="deleteModal" title="Delete Credential" small="true">
				<div slot="modal-body" class="modal-body text-center" v-if="selectedItem">Delete {{ selectedItem.name }}?</div>
				<div slot="modal-footer" class="modal-footer">
					<button type="button" class="btn btn-default btn-sm" @click='deleteModal = false'>Keep</button>
					<button type="button" class="btn btn-primary btn-sm" @click='deleteModal = false,remove(selectedCost)'>Delete</button>
				</div>
			</modal>
			<modal title="Save Changes" :show.sync="showSaveAlert" ok-text="Continue" cancel-text="Cancel" :callback="forceBack">
				<div slot="modal-body" class="modal-body">You have unsaved changes, continue anyway?</div>
			</modal>

		</validator>
	</div>

</template>
<script type="text/javascript">

    import vSelect from "vue-select";
    import uploadCreateUpdate from '../../uploads/admin-upload-create-update.vue';
    import errorHandler from'../../error-handler.mixin';
    export default{
        name: 'media-credential-create-update',
        components: {vSelect, 'upload-create-update': uploadCreateUpdate},
        mixins: [errorHandler],
        props: {
            isUpdate: {
                type: Boolean,
                default: false
            },
            id: {
                type: String,
                default: null
            },
            forAdmin: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                // mixin settings
                validatorHandle: 'CreateUpdateMediaCredential',

                applicant_name: '',
                usersArr: [],
                userObj: null,
                selectedRoleObj: null,
                disclaimer: false,
                content: [
                    { id: 'role', q: 'Please select any roles you have experience in and feel confident performing on this trip', a: '', type: 'checkbox', options: [
                        {value: false, name: 'Videographer', proficiency: ''},
                        {value: false, name: 'Photographer', proficiency: ''},
                        {value: false, name: 'Video Editor', proficiency: ''},
                        {value: false, name: 'Web Developer', proficiency: ''},
                        {value: false, name: 'Social Media', proficiency: ''},
                        {value: false, name: 'Motion Graphics Artist', proficiency: ''},
                        {value: false, name: 'Drone Operator', proficiency: ''},
                        {value: false, name: 'Graphic Designer', proficiency: ''},
                        {value: false, name: 'Producer/Writer', proficiency: ''},
                        {value: false, name: 'Translator (Spanish)', proficiency: ''},
                    ]},
                    { id: 'equipment', q: 'Please select any equipment listed that you plan to bring:', a:{}, type: 'checkbox', options: [
	                    {value: false, name: 'Camcorder/video camera for video', brand: ''},
	                    {value: false, name: 'Camera for photo', brand: ''},
	                    {value: false, name: 'DSLR or mirrorless camera', brand: ''},
	                    {value: false, name: 'Mountable action camera', brand: ''},
	                    {value: false, name: 'Audio Tech recorder / microphone operator', brand: ''},
	                    {value: false, name: 'Drone', brand: ''},
	                    {value: false, name: 'Lenses', brand: ''},
	                    {value: false, name: 'Support (tripods, steadicams and sliders)', brand: ''},
	                    {value: false, name: 'Editing device (both computer and program)', brand: ''},
	                    {value: false, name: 'Other Equipment', brand: ''},
                    ]},
	                { q: 'Please provide at least one link to an online portfolio:', a: '', type:'url', placeholder: 'vimeo.com/username or behance.net/username or youtube.com/username'},
	                { id: 'disclaimer', q: 'Agreed to Disclaimer', a: false, type: 'checkbox'}
                ],
                expired_at: moment().add(1, 'y').add(1, 'days').startOf('day').format('YYYY-MM-DD'),
                expires: {
                    license: null,
                    certification: null,
                    diploma: null,
                },

                uploads: [],
                upload_ids: [],
                uploadCounter: 1,
                attemptUploadDoc: false,

                // logic vars
                selectedAvatar: null,
                today: moment().format('YYYY-MM-DD'),
                yesterday: moment().subtract(1, 'days').format('YYYY-MM-DD'),
                tomorrow: moment().add(1, 'days').format('YYYY-MM-DD'),
                resource: this.$resource('credentials/media{/id}', { 'include': 'uploads'})
            }
        },
        computed: {
            user_id(){
                return  _.isObject(this.userObj) ? this.userObj.id : this.$root.user.id;
            },
            validateDynamically(){
                let self = this;
                let pass = true;

                // check proficiencies
                let roles = _.findWhere(this.content, { id: 'role'});
                let selectedRoles = _.findWhere(roles.options, { value: true});
                _.each(selectedRoles, function (role) {
                    if (role.proficiency === null || role.proficiency === '') {
                        self.$root.$emit('showError', 'Please select a proficiency level for ' + role.name);
                        pass = false;
                    }
                });
                // HACK - to resume progress i need to force validation of roles checkboxes for now...
//                this.$CreateUpdateMediaCredential.roles.invalid = pass;
                // check brands/models
                let equipment = _.findWhere(this.content, { id: 'equipment'});
                let selectedEquipment = _.findWhere(equipment.options, { value: true});
                _.each(selectedEquipment, function (item) {
                    if (item.brand === null || item.brand === '') {
                        self.$root.$emit('showError', 'Please type a brand/model name for your ' + item.name);
                        pass = false;
                    }
                });


                return pass;
            }
        },
        watch:{
            content: {
                handler: function (val, oldVal) {
                    let roleObj = _.findWhere(val, {id: 'role'}); // seems unnecessary but we should not assume the order of the data
                    if (_.isObject(this.selectedRoleObj) && this.selectedRoleObj.value !== roleObj.a) {
                        roleObj.a = this.selectedRoleObj.value;
                    }
                    // console.log('Content: ', val);
                },
                deep: true
            },
            disclaimer(val){
                let contentIndex = _.findIndex(this.content, {id: 'disclaimer'});
                this.content[contentIndex].a = val;
            }
        },
        methods: {
            getUsers(search, loading){
                loading ? loading(true) : void 0;
                this.$http.get('users', { params: { search: search} }).then(function (response) {
                    this.usersArr = response.body.data;
                    loading ? loading(false) : void 0;
                })
            },
            onTouched(){
                this.hasChanged = true;
            },
            back(force){
                if (this.hasChanged && !force ) {
                    this.showSaveAlert = true;
                    return false;
                }
                window.location.href = '/'+ this.firstUrlSegment +'/records/media-credentials/';
            },
            forceBack(){
                return this.back(true);
            },
            submit(){
                this.resetErrors();
                if (this.$CreateUpdateMediaCredential.valid) {
                    this.resource.save(null, {
                        applicant_name: this.applicant_name,
                        holder_id: this.user_id,
                        holder_type: 'users',
                        content: this.content,
                        expired_at: moment(this.expired_at).startOf('day').format('YYYY-MM-DD HH:mm:ss'),
//                        uploads: _.uniq(this.upload_ids),
                    }).then(function (resp) {
                        this.$dispatch('showSuccess', 'Media Credential created.');
                        let that = this;
                        setTimeout(function () {
                            window.location.href = '/'+ that.firstUrlSegment +'/records/media-credentials/' + resp.body.data.id;
                        }, 1000);
                    }, function (error) {
                        this.errors = error.data.errors;
                        this.$dispatch('showError', 'Unable to create media credential.');
                    });
                } else {
                    this.showError = true;
                }
            },
            update(){
                if ( _.isFunction(this.$validate) )
                    this.$validate(true);

                this.resetErrors();
                if (this.$CreateUpdateMediaCredential.valid) {
                    this.resource.update({id:this.id, include: 'uploads'}, {
                        applicant_name: this.applicant_name,
                        holder_id: this.user_id,
                        holder_type: 'users',
                        content: this.content,
                        expired_at: moment(this.expired_at).startOf('day').format('YYYY-MM-DD HH:mm:ss'),
//                        uploads: _.uniq(this.upload_ids),
                    }).then(function (resp) {
                        this.$dispatch('showSuccess', 'Changes saved.');
                        let that = this;
                        setTimeout(function () {
                            window.location.href = '/'+ that.firstUrlSegment +'/records/media-credentials/' + that.id;
                        }, 1000);
                    }, function (error) {
                        this.errors = error.data.errors;
                        this.$dispatch('showError', 'Unable to save changes.');
                    });
                }
            },
            checkConditions(question){
                // skip files and role question
                if (_.contains(['disclaimer', 'note'], question.id))
                    return false;

                if (question.hasOwnProperty('conditions')) {
                    // handles multiple conditions
                    if (!_.isObject(this.selectedRoleObj))
                        return false;
	                
                    return true;
                } else return true;
            },
            syncCheckboxes() {
                let self = this;
                this.$nextTick(function () {
                    _.each($('input[type=checkbox]'), function (checkbox) {
//	                    if (checkbox.hasAttribute('checked'))
                        checkbox.checked = checkbox.hasAttribute('checked');
                    });
                    self.$validate('certifications', true);
                    self.$validate('participations', true);
//					debugger;
//                  let certifications = _.findWhere(this.content, { id: 'files'})
                });
            }
        },
        ready(){
            // set user data
            // this.userId = this.holder_id = this.$root.user.id;
            // this.holder_type = 'users';
            if (this.isUpdate) {
                this.resource.get({ id: this.id, include: 'holder'}).then(function (response) {
                    let credential = response.body.data;
                    this.applicant_name = credential.applicant_name;
                    this.holder_id = credential.holder_id;
                    this.holder_type = credential.holder_type;
                    this.content = credential.content;
                    this.expired_at = credential.expired_at;
                    this.userObj = credential.holder.data;
                    this.usersArr.push(this.userObj);

                    this.disclaimer = _.findWhere(this.content, { id: 'disclaimer'}).a;
                    this.syncCheckboxes();
                });
            }
        }
    }
</script>