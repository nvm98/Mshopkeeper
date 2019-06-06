//Hàm khởi tạo dialog confirm để đóng dialog khác đóng Dialog
//Người tạo NVMANH 3/6/2019
$(function () {
    $("#dialog-close").dialog({
        autoOpen: false,
        resizable: false,
        height: 156,
        width: 400,
        modal: true,
        dialogClass: "no-close",
        classes: {
            "ui-dialog-title": "custom-title",
            "ui-dialog-titlebar-close": "btn-close-dialog-finally",
            "ui-dialog-titlebar": "content-dialog-title-close"
        }
    });
});

$(document).ready(function () {

    $(".dialog-header-item-close").on("click", function () {
        $("#dialog-close").dialog('open');
    });

    //Xử lý đóng dialog
    //Người tạo NVMANH 5/6/2019
    $(".dialog-close-no-save").on('click', function () {
        forceClose = true;
        $("#dialog-close").dialog('close');
        $("#dialog-add-receipt").dialog('close');
    });
    $(".dialog-close-no-save").on('click', function () {
        $("#dialog-close").dialog('close');
    });
});
//Bắt sựu kiện nút đóng trên dialog cần đóng
//Người tạo NVMANH 5/6/2019
