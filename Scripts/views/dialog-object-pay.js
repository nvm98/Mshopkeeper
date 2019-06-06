//Hàm khởi tạo dialog chọn đối tượng nốp
//Người tạo NVMANH 3/6/2019
$(function () {
    $("#dialog-object-pay").dialog({
        autoOpen: false,
        height: 500,
        width: 800,
        minHeight: 500,
        minWidth: 800,
        modal: true,
        classes: {
            "ui-dialog-title": "custom-title",
            "ui-dialog-titlebar-close": "btn-close-dialog-pay",
            "ui-dialog-titlebar": "content-dialog-title-pay"
        }
    });
});
$("body").on("click", "#icon-input-search-object", function () {
    $("#dialog-object-pay").dialog("open");
});