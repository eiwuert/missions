<template>
    <div style="display: inline-block;" class="text-left">
        <button class="btn btn-default btn-sm" type="button" @click="showImportModal=true">
            Import <span class="fa fa-upload"></span>
        </button>

        <modal :title="title" :show.sync="showImportModal" effect="zoom" width="400" ok-text="Import" :callback="importList">
            <div slot="modal-body" class="modal-body">
                <spinner v-ref:spinner size="sm" text="importing"></spinner>
                
                <div class="alert alert-info" v-if="totalRows > 0">
                    <p>{{ totalRows }} records are being processed. An email will be sent when importing is completed.</p>
                </div>

                <validator name="validation" :classes="{ invalid: 'has-error' }">
                    <div class="row">
                        <div v-validate-class class="col-sm-12 form-group">
                            <label for="file" class="control-label">File</label>
                            <input type="file" id="file" accept=".csv" v-model="importFile" @change="handleFile" class="form-control" initial="off" v-validate:file="{file: { rule: true, message: 'A valid .csv file is required.'}}">
                            <span class="help-block">.csv files only</span>
                        </div>
                    </div>
                    <hr class="divider">
                    <div class="row">
                        <div class="col-sm-12">
                            <label>Required Fields</label>
                        </div>
                        <div class="col-sm-4" v-for="required in requiredFields">
                            <code>{{ required }}</code>
                        </div>
                    </div>
                    <hr class="divider">
                    <div class="row">
                        <div class="col-sm-12">
                            <label>Optional Fields</label>
                        </div>
                        <div class="col-sm-4" v-for="optional in optionalFields">
                            <code>{{ optional }}</code>
                        </div>
                    </div>
                </validator>
            </div>
        </modal>
    </div>
</template>
<script>
    export default {
        name: 'import-utility',
        props: {
            'url': {
                type: String,
                required: true
            },
            'title': {
                type: String,
                default: 'Import List'
            },
            'requiredFields': {
                type: Array,
                required: true
            },
            'optionalFields': {
                type: Array,
                default: []
            },
            'parentId': {
                type: String,
                default: null
            }
        },
        data(){
            return{
                showImportModal: false,
                file: null,
                importFile: null,
                totalRows: 0,
                totalImported: 0
            }
        },
        computed: {
            rejected() {
                return this.totalRows - this.totalImported;
            }
        },
        watch: {
            showImportModal(val)
            {
                if(val == false) {
                    this.totalRows = 0;
                    this.totalImported = 0;
                }
            }
        },
        methods: {
            handleFile(e) {
                var self = this;
                var reader = new FileReader();
                reader.onload = function(event){
                    // var img = new Image();
                    // self.file = img.src = event.target.result;
                    self.file = event.target.result;
                };
                reader.readAsDataURL(e.target.files[0]);
            },
            importList(){
                var self = this;
                this.$validate(true, function() {
                    if (self.$validation.invalid) {
                        self.$dispatch('showError', _.first(self.$validation.errors).message)
                        throw new Error("Validation errors");
                    }
                });

                this.$http.post(this.url, {file: this.file||undefined, required: this.requiredFields, email: this.$root.user.email, parent_id: this.parentId}).then(function (response) {
                    this.totalRows = response.body.total_rows;
                    this.totalImported = response.body.total_imported;
                    this.$dispatch('showSuccess', response.body.message);
                    this.$dispatch('importComplete', true);
                    // this.showImportModal = false;
                    this.file = null;
                    this.importFile = null;
                }, function (error) {
                    if (error.data.errors) {
                        this.$dispatch('showError', _.first(_.toArray(error.data.errors)));
                    } else {
                        this.$dispatch('showError', error.data.message);
                    }
                })
            }
        }
    }
</script>
<style scoped>
    input.form-control {
        display: block;
        width: 100%;
    }
</style>