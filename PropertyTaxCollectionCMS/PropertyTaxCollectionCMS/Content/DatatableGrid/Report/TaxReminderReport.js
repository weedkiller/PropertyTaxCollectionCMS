﻿$(document).ready(function () {

    var fdate = $('#txt_fdate').val();
    var tdate = $('#txt_tdate').val();
    debugger
    $('#datatable').DataTable({
        "pageLength": 10,
        "order": [[0, "desc"]],
        "responsive": true,
        //"serverSide": true,
        "columnDefs": [
  {
      "targets": [0],
      "visible": false,
      "searchable": false
  }, ],
        //"processing": true,
        "ajax": {
            "type": "POST",
            "datatype": "json",
            "url": "/Report/getTaxReminderReport",
            "data": {
                "fromDate": fdate,
                "toDate": tdate,
                "q": -1
            },
            //"tye": "POST",
            //"datatype": "json",
        },
        
        "columns": [
            { "data": "TC_ID" },
             { "data": "ADUM_USER_NAME" },
              { "data": "PAYMENT_DATE" },
             
                 { "data": "RECEIPT_NO" },
                  { "data": "HOUSEID" },
                    { "data": "House_Owner_NAME" },
                        { "data": "House_Owner_Address" },
                    { "data": "REASON" },
            
                { "data": "TOTAL_AMOUNT" },
                { "data": "RECEIVED_AMOUNT" },
                { "data": "REMAINING_AMOUNT" },
                
                    {
                        data: "TaxRemImage", name: "TaxRemImage",             
                        render: function (data, type, row, full, meta) {                 
                            if (row["TaxRemImage"] == null) {
                                return "<div style='cursor:pointer;display:inline-flex;'  onclick=PopImages(this)><img alt='No Photo'  src='/Images/no_img_avaliable.png' style='height:35px;width:35px;cursor:pointer;margin-left:0px;'></img><span><ul class='dt_pop'  style='margin:2px -5px -5px -5px; padding:0px;list-style:none;display:none;'><li  class='li_date datediv' >" + row["PAYMENT_DATE"] + "</li><li class='addr-length' style='margin:0px 0px 0px 10px;'>"
                                     + row["RECEIVER_NAME"] + "</li><li style='display:none' class='li_title' >Photo </li></ul></span></div>";
                            }
                            else {
                                return "<div style='cursor:pointer;display:inline-flex;'  onclick=PopImages(this)><img alt='No Photo'  src='" + data +"' style='height:35px;width:35px;cursor:pointer;margin-left:0px;'></img><span><ul class='dt_pop'  style='margin:2px -5px -5px -5px; padding:0px;list-style:none;display:none;'><li  class='li_date datediv' >" + row["PAYMENT_DATE"] + "</li><li class='addr-length' style='margin:0px 0px 0px 10px;'>"
                                     + row["RECEIVER_NAME"] + "</li><li style='display:none' class='li_title' >Photo </li></ul></span></div>";;
                            }
                        }
                    },
           
        ]

    });

});


function PopImages(cel) {

    $('#myModal_Image').modal('toggle');
    debugger
    var addr = $(cel).find('.addr-length').text();
    var date = $(cel).find('.li_date').text();
    var imgsrc = $(cel).find('img').attr('src');
    var head = $(cel).find('.li_title').text();
    jQuery("#latlongData").text(addr);
    jQuery("#dateData").text(date);
    jQuery("#imggg").attr('src', imgsrc);
    //jQuery("#latlongData").text(cellValue);
    jQuery("#header_data").html(head);
}

function Datatable() {

    debugger;

    $("#datatable").dataTable().fnDestroy();

    var fdate = $('#txt_fdate').val();
    var tdate = $('#txt_tdate').val();
    var UserId = $('#selectnumber').val();
    $('#datatable').DataTable({
        "pageLength": 10,
        "order": [[0, "desc"]],
        "responsive": true,
        //"serverSide": true,
       // "processing": true,
   "columnDefs": [
  {
      "targets": [0],
      "visible": false,
      "searchable": false
  }, ],
   "ajax": {
       "type": "POST",
       "datatype": "json",
            "url": "/Report/getTaxReminderReport",
            "data": {
                "fromDate": fdate,
                "toDate": tdate,
                "q": UserId
            },
            //"tye": "POST",
            //"datatype": "json",
        },

        "columns": [
              { "data": "TC_ID" },
             { "data": "ADUM_USER_NAME" },
              { "data": "PAYMENT_DATE" },

                 { "data": "RECEIPT_NO" },
                  { "data": "HOUSEID" },
                    { "data": "House_Owner_NAME" },
                        { "data": "House_Owner_Address" },
                    { "data": "REASON" },

                { "data": "TOTAL_AMOUNT" },
                { "data": "RECEIVED_AMOUNT" },
                { "data": "REMAINING_AMOUNT" },
               
                     {
                         data: "TaxRemImage", name: "TaxRemImage",

                         render: function (data, type, row, full, meta) {

                             if (row["TaxRemImage"] == null) {
                                 return "<div style='cursor:pointer;display:inline-flex;'  onclick=PopImages(this)><img alt='No Photo'  src='/Images/no_img_avaliable.png' style='height:35px;width:35px;cursor:pointer;margin-left:0px;'></img><span><ul class='dt_pop'  style='margin:2px -5px -5px -5px; padding:0px;list-style:none;display:none;'><li  class='li_date datediv' >" + row["PAYMENT_DATE"] + "</li><li class='addr-length' style='margin:0px 0px 0px 10px;'>"
                                      + row["RECEIVER_NAME"] + "</li><li style='display:none' class='li_title' >Photo </li></ul></span></div>";
                             }
                             else {
                                 return "<div style='cursor:pointer;display:inline-flex;'  onclick=PopImages(this)><img alt='No Photo'  src='" + data + "' style='height:35px;width:35px;cursor:pointer;margin-left:0px;'></img><span><ul class='dt_pop'  style='margin:2px -5px -5px -5px; padding:0px;list-style:none;display:none;'><li  class='li_date datediv' >" + row["PAYMENT_DATE"] + "</li><li class='addr-length' style='margin:0px 0px 0px 10px;'>"
                                     + row["RECEIVER_NAME"] + "</li><li style='display:none' class='li_title' >Photo </li></ul></span></div>";
                             }
                         }
                     },
             
        ]
    });

}


function PopImages(cel) {

    $('#myModal_Image').modal('toggle');
    debugger
    var addr = $(cel).find('.addr-length').text();
    var date = $(cel).find('.li_date').text();
    var imgsrc = $(cel).find('img').attr('src');
    var head = $(cel).find('.li_title').text();
    jQuery("#latlongData").text(addr);
    jQuery("#dateData").text(date);
    jQuery("#imggg").attr('src', imgsrc);
    //jQuery("#latlongData").text(cellValue);
    jQuery("#header_data").html(head);
}
var UserId = $('#selectnumber').val();
debugger;
$.ajax({
    type: "POST",
    url: "/Report/GetEmployeeList",
    data: { ADUM_USER_CODE: UserId },
    datatype: "json",
    traditional: true,
    success: function (data) {
        district = '<option value="-1">Select Employee</option>';
        for (var i = 0; i < data.length; i++) {
            district = district + '<option value=' + data[i].Value + '>' + data[i].Text + '</option>';
        }
        //district = district + '</select>';
        $('#selectnumber').html(district);
    }
});
function Search() {
    Datatable();
}