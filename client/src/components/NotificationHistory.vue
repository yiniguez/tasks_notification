<template>
    <div class="row">
        <div class="col-lg-12 px-4">
            <h3>Notification History Logs</h3>
            <div id="notificationHLDT" class="table-responsive">
                <DataTable :data="notificationhistorylogs" :columns="columns" class="table table-striped table-bordered display"
                :options="{responsive: true, autoWidth: false, dom:'Bfrtip', buttons: buttons}">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Message
                            </th>
                            <th>
                                Category
                            </th>                            
                            <th>
                                Status
                            </th>
                            <th>
                                Channel
                            </th>
                            <th>
                                User Name
                            </th>
                            <th>
                                User Email
                            </th>
                            <th>
                                User Phone Number
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
import Buttons from "datatables.net-buttons-bs5";
import ButtonsHtml5 from "datatables.net-buttons/js/buttons.html5";
import print from "datatables.net-buttons/js/buttons.print";
import pdfmake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfmake.vfs = pdfFonts.pdfMake.vfs;
import 'datatables.net-responsive-bs5';
import JsZip from "jszip";
window.JSZip = JsZip;
DataTable.use(DataTableLib);
DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);
export default{
    components: {
        DataTable,
    },
    data() {
        return {
            notificationhistorylogs: null,
            columns: [
                { data: null, render: function(data,type,row,meta){ return `${meta.row+1}`} },
                { data: 'notificationMsg'},
                { data: 'categoryName'},
                { data: 'status'},
                { data: 'channelName'},
                { data: 'userName'},
                { data: 'userEmail'},
                { data: 'userPhoneNumber'},
                { data: 'createdAt'},
            ],
            buttons: [
                {
                    title: 'Export Notification History Logs',
                    extend: 'excelHtml5',
                    text: '<i class="fa-solid fa-file-excel"></i> Excel',
                    className: 'btn btn-success',
                },{
                    title: 'Export Notification History Logs',
                    extend: 'pdfHtml5',
                    text: '<i class="fa-solid fa-file-pdf"></i> PDF',
                    className: 'btn btn-danger',
                },{
                    title: 'Export Notification History Logs',
                    extend: 'print',
                    text: '<i class="fa-solid fa-print"></i> Print',
                    className: 'btn btn-dark',
                },{
                    title: 'Export Notification History Logs',
                    extend: 'copy',
                    text: '<i class="fa-solid fa-copy"></i> Copy',
                    className: 'btn btn-info',
                },
            ]
        }
    },
    mounted() {
        this.getNotificationHistory();
    },
    methods: {
        getNotificationHistory() {
            axios.get('http://localhost:4000/api/notificationhistory/get').then(
                response => (
                    this.notificationhistorylogs = response.data
                )
            )
        }
    }
}
</script>
<style>
@import 'datatables.net-bs5'; 
</style>