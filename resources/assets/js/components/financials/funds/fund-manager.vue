<template>
    <section>
        <div class="col-md-4">
            <fund-editor :id="id"></fund-editor>
        </div>
        <div class="col-md-8">
            <div class="collapse" id="createTransaction">
                <transaction-form :fund-id="id"></transaction-form>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h5>Transactions</h5>
                </div><!-- end panel-heading -->
                <div class="panel-body">
                    <admin-transactions-list :fund="id"
                                             storage-name="AdminFundTransactionsConfig">
                    </admin-transactions-list>
                </div><!-- end panel-body -->
            </div>
            <slot></slot>
        </div>
    </section>
</template>
<script type="text/javascript">
    import fundEditor from '../funds/fund-editor.vue';
    import transactionForm from '../transactions/transaction-form.vue';
    import adminTransactionsList from '../transactions/admin-transactions-list.vue';
    export default{
        name: 'fund-manager',
        props: {
            'id': {
                type: String,
                required: true
            }
        },
        data(){
            return{

            }
        },
        components:{
            fundEditor,
            transactionForm,
            adminTransactionsList
        },
        events: {
            'transactionCreated': function() {
                this.$broadcast('reconcileFund');
                this.$broadcast('refreshTransactions');
            }
        }
    }
</script>