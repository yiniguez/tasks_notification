<template>
    <div class="row">
        <div class="col-lg-12 px-4">
            <h3>Notifications</h3>
            <div class="table-responsive">
                <DataTable :data="notifications" :columns="columns" class="table table-striped table-bordered display"
                :options="{responsive: true, autoWidth: false, dom:'frtip'}">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Message
                            </th>
                            <th>
                                Category
                            </th>
                            <th>
                                Created at
                            </th>
                        </tr>
                    </thead>
                </DataTable>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import DataTable from "datatables.net-vue3";
import DataTableLib from "datatables.net-bs5";
import 'datatables.net-responsive-bs5';

DataTable.use(DataTableLib);
export default{
    components: {
        DataTable,
    },
    data() {
        return {
            notifications: null,
            columns: [
                { data: null, render: function(data,type,row,meta){ return `${meta.row+1}`} },
                { data: 'status'},
                { data: 'message'},
                { data: 'categoryName'},
                { data: 'createdAt'},
            ], 
        }
    },
    mounted() {
        this.getNotifications();
    },
    methods: {
        getNotifications() {
            axios.get('http://localhost:4000/api/notification/get').then(
                response => (
                    this.notifications = response.data
                )
            )
        }
    }
}
</script>
<style>
@import 'datatables.net-bs5'; 
</style>