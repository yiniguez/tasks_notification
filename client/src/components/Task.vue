<template>
    <div class="row">
        <div class="col-lg-12 px-4">
            <h3>Tasks</h3>
            <div class="table-responsive">
                <DataTable :data="tasks" :columns="columns" class="table table-striped table-bordered display"
                :options="{responsive: true, autoWidth: false, dom:'frtip'}">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Title
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Completed
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
            tasks: null,
            columns: [
                { data: null, render: function(data,type,row,meta){ return `${meta.row+1}`} },
                { data: 'title'},
                { data: 'description'},
                { data: 'completed'},
                { data: 'createdAt'},
            ], 
        }
    },
    mounted() {
        this.getTasks();
    },
    methods: {
        getTasks() {
            axios.get('http://localhost:4000/tasks').then(
                response => (
                    this.tasks = response.data
                )
            )
        }
    }
}
</script>
<style>
@import 'datatables.net-bs5'; 
</style>