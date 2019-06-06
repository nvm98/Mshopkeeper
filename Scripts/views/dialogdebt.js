//Khởi tạo dialog chọn hóa đơn thu nợ
//Người tạo NVMANH 31/5/2019
$(function () {
    $("#dialog-collect-debt").dialog({
        autoOpen: false,
        resizable:true,
        height: 600,
        width: 840,
        modal: true,
        dialogClass: "no-close",
        classes: {
            "ui-dialog-title": "custom-title",
            "ui-dialog-titlebar-close": "btn-close-dialog-debt",
            "ui-dialog-titlebar": "content-dialog-title-debt"
        }
    });
    var myIcon = '<span class="icon-dialog-resize-debt"></span>';
    $(".custom-title").after(myIcon);
    $("body").on("click", "#btn-collect-debt", function () {
        $("#dialog-collect-debt").dialog("open", "option", "position", { my: "center", at: "center", of: window });
        $("#dialog-collect-debt").dialog({
            resizable: false,
            height: 600,
            width: 840
        });
    });
});
//Hàm hiển thị fullscreen cho dialog chọn hóa đơn thu nợ
//Người tạo NVMANH 31/5/2019
$("body").on('click', ".icon-dialog-resize-debt", function () {
    if ($("#dialog-collect-debt").dialog("option", "height") !== $(window).height()) {
        $("#dialog-collect-debt").dialog({
            height: $(window).height(),
            width: $(window).width()
        });
        console.log(2);
        $("#dialog-collect-debt").dialog("option", "position", { my: "center", at: "center", of: window });
    } else {
        $("#dialog-collect-debt").dialog({
            height: 600,
            width: 840
        });
        console.log(1);
        $("#dialog-collect-debt").dialog("option", "position", { my: "center", at: "center", of: window });
    }
});

