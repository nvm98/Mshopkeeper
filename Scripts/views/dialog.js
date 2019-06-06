//Hàm hiển thị dialog
//Người tạo NVMANH 27/5/2019
forceClose = false;
$(function () {
    $("#dialog-add-receipt").dialog({
        autoOpen: false,
        open: function (event, ui) {
            forceClose = false;
        },
        resizable: false,
        height: 700,
        width: 900,
        modal: true,
        dialogClass: "no-close",
        beforeClose: function (event, ui) {
            $("#dialog-close").dialog('open');
            if (forceClose) {
                return true;
            } else {
                return false;
            }
        },
        classes: {
            "ui-dialog-title": "custom-title",
            "ui-dialog-titlebar-close": "btn-close-dialog",
            "ui-dialog-titlebar":"content-dialog-title"
        }
    });
    
    //Thêm nut resize dialog 
    //Người tạo NVMANH 28/5/2019
    var myIcon = '<span class="icon-dialog-resize"></span>';
    $(".custom-title").after(myIcon);
});
//Sự kiện hiện Dialog 
//Người tạo NVMANH 28 / 5 / 2019
$(document).ready(function () {
    $("#add-receipt").on("click", function () {
        $("#dialog-add-receipt").dialog("open", "option", "position", { my: "center", at: "center", of: window });
        $("#dialog-add-receipt").dialog({
            resizable: false,
            height: 700,
            width: 900
        });
        $("#ui-id-1").text("Thêm mới phiếu thu");
        $(".calc-pay").hide();
        $(".calc-collect").show();
        $(".dialog-header-item-save, .dialog-header-item-help, .dialog-header-item-complete").removeClass("dialog-header-item-off");
        $(".dialog-header-item-backward, .dialog-header-item-forward, .dialog-header-item-add, .dialog-header-item-edit, .dialog-header-item-delete, .dialog-header-item-back, .dialog-header-item-print").addClass("dialog-header-item-off");
    });
});

//Hàm ẩn hiện theo tùy chọn radio button trên dialog
//Người tạo NVMANH 30/5/2019
$(document).ready(function () {
    var iconInput = $(".employee-input-left div, .object-input-left div");
    var input = $(".dialog-info-object input, .dialog-info-submitter input, .dialog-info-address input, .dialog-info-reason input, .dialog-info-employee input");
    $("#radio1").change(function () {
        if ($(this).is(":checked")) {
            $(".dialog-body-different").show();
            $(".dialog-body-debt").hide();
            input.removeClass("input-blinking");
            input.parent().removeClass("debt-background");
            input.removeClass("debt-background");
            iconInput.removeClass("hide-icon");
            $(".dialog-panel-purpose-collect").hide();
            $(".table-select-object").hide();
            $(".table-select-employee").hide();
        }
    });
    $("#radio2").change(function () {
        if ($(this).is(":checked")) {
            $(".dialog-body-debt").show();
            $(".dialog-body-different").hide();
            input.addClass("input-blinking");
            input.parent().addClass("debt-background");
            input.addClass("debt-background");
            iconInput.addClass("hide-icon");
            $(".dialog-panel-purpose-collect").show();
        }
    });
});
//Hiển thị outline khi click input trên dialog
//Người tạo NVMANH 29/5/2019
function showOutline(input) {
    $('body').on('focus', input, function () {
        $(input).parent().css("border-color", "#5fa2dd");
    });
}
showOutline("#object-input-left");
showOutline("#object-input-right");
showOutline("#dialog-info-submitter-input");
showOutline("#dialog-info-address-input");
showOutline("#dialog-info-reason-input");
showOutline("#employee-input-left");
showOutline("#employee-input-right");
showOutline("#dialog-voucher-number-input");
showOutline("#dialog-voucher-date-input");
showOutline("#collect-input-1");
showOutline("#collect-input-2");
showOutline("#collect-input-3");
showOutline(".header-form-control-date");
showOutline(".header-form-control-number-voucher");
showOutline(".select-type-voucher-item");
showOutline(".header-form-control-total");
showOutline(".header-form-control-object");
showOutline(".header-form-control-reason");
//Ẩn outline khi click input trên dialog
//Người tạo NVMANH 29/5/2019
function focusOutline(input) {
    $('body').on('focusout', input, function () {
        $(input).parent().css("border-color", "#d0d0d0");
    });
}

focusOutline("#object-input-left");
focusOutline("#object-input-right");
focusOutline("#dialog-info-submitter-input");
focusOutline("#dialog-info-address-input");
focusOutline("#dialog-info-reason-input");
focusOutline("#employee-input-left");
focusOutline("#employee-input-right");
focusOutline("#dialog-voucher-number-input");
focusOutline("#dialog-voucher-date-input");
focusOutline("#collect-input-1");
focusOutline("#collect-input-2");
focusOutline("#collect-input-3");
focusOutline(".header-form-control-date");
focusOutline(".header-form-control-number-voucher");
focusOutline(".select-type-voucher-item");
focusOutline(".header-form-control-total");
focusOutline(".header-form-control-object");
focusOutline(".header-form-control-reason");
//Hàm hiển thị fullscreen cho dialog 
//Người tạo NVMANH 29/5/2019
$("body").on('click', ".icon-dialog-resize", function () {
    if ($("#dialog-add-receipt").dialog("option","height") === 700) {
        $("#dialog-add-receipt").dialog({
            resizable: false,
            height: $(window).height(),
            width: $(window).width()
        });
        $("#dialog-add-receipt").dialog("option", "position", { my: "center", at: "center", of: window });
    } else {
        $("#dialog-add-receipt").dialog({
            resizable: false,
            height: 700,
            width: 900
        });
        $("#dialog-add-receipt").dialog("option", "position", { my: "center", at: "center", of: window });

    }
});


//Cuộn bảng trong tab chứng từ dialog 
//Người tạo NVMANH 30/5/2019
$(document).ready(function() {
    $(".dialog-voucher-tab-body").scroll(function () {
        $(".dialog-voucher-tab-footer").scrollLeft($(".dialog-voucher-tab-body").scrollLeft());
    });
    $(".dialog-voucher-tab-body").scroll(function () {
        $(".dialog-voucher-tab-header").scrollLeft($(".dialog-voucher-tab-body").scrollLeft());
    });
});
//Hiển nội dung tab khi chọn label trên dialog 
//Người tạo NVMANH 30/5/2019
$(document).ready(function () {
    $(".tab-label-detail").on('click', function () {
        $(".tab-label-detail").addClass("tab-label-click");
        $(".tab-label-voucher").removeClass("tab-label-click");
        $(".dialog-content-tab-voucher").hide();
        $(".dialog-content-tab-detail").show();
    });
    $(".tab-label-voucher").on('click', function () {
        $(".tab-label-voucher").addClass("tab-label-click");
        $(".tab-label-detail").removeClass("tab-label-click");
        $(".dialog-content-tab-detail").hide();
        $(".dialog-content-tab-voucher").show();
    });
});

//Thêm phiếu chi tiền
//Người tạo NVMANH 5/6/2019
$(document).ready(function () {
    $("#add-pay").on("click", function () {
        $("#dialog-add-receipt").dialog("open", "option", "position", { my: "center", at: "center", of: window });
        $("#dialog-add-receipt").dialog({
            resizable: false,
            height: 700,
            width: 900
        });
        $("#ui-id-1").text("Thêm mới phiếu chi");
        $(".calc-collect").hide();
        $(".calc-pay").show();
        $(".dialog-header-item-save, .dialog-header-item-help, .dialog-header-item-complete").removeClass("dialog-header-item-off");
        $(".dialog-header-item-backward, .dialog-header-item-forward, .dialog-header-item-add, .dialog-header-item-edit, .dialog-header-item-delete, .dialog-header-item-back, .dialog-header-item-print").addClass("dialog-header-item-off");
    });
});

//Nhân bản 
//Người tạo NVMANH 5/6/2019
$(document).ready(function () {
    $("#toolbar-item-duplicate").on("click", function () {
        $("#dialog-add-receipt").dialog("open", "option", "position", { my: "center", at: "center", of: window });
        $("#dialog-add-receipt").dialog({
            resizable: false,
            height: 700,
            width: 900
        });
        $("#ui-id-1").text("Thêm mới phiếu thu");
        $(".calc-pay").hide();
        $(".calc-collect").show();
        $(".dialog-header-item-save, .dialog-header-item-help, .dialog-header-item-complete").removeClass("dialog-header-item-off");
        $(".dialog-header-item-backward, .dialog-header-item-forward, .dialog-header-item-add, .dialog-header-item-edit, .dialog-header-item-delete, .dialog-header-item-back, .dialog-header-item-print").addClass("dialog-header-item-off");
    });
});

//Xem bản ghi
//Người tạo NVMANH 5/6/2019
$(document).ready(function () {
    $("#toolbar-item-view").on("click", function () {
        $("#dialog-add-receipt").dialog("open", "option", "position", { my: "center", at: "center", of: window });
        $("#dialog-add-receipt").dialog({
            resizable: false,
            height: 700,
            width: 900
        });
        $("#ui-id-1").text("Phiếu thu");
        $(".calc-pay").hide();
        $(".calc-collect").show();
        $(".dialog-header-item-forward, .dialog-header-item-add, .dialog-header-item-edit, .dialog-header-item-delete, .dialog-header-item-print,.dialog-header-item-help, .dialog-header-item-complete").removeClass("dialog-header-item-off");
        $(".dialog-header-item-backward, .dialog-header-item-save, .dialog-header-item-back").addClass("dialog-header-item-off");
    });
});

//Sửa bản ghi
//Người tạo NVMANH 5/6/2019
$(document).ready(function () {
    $("#toolbar-item-edit").on("click", function () {
        $("#dialog-add-receipt").dialog("open", "option", "position", { my: "center", at: "center", of: window });
        $("#dialog-add-receipt").dialog({
            resizable: false,
            height: 700,
            width: 900
        });
        $("#ui-id-1").text("Sửa phiếu thu");
        $(".calc-pay").hide();
        $(".calc-collect").show();
        $(".dialog-header-item-save, .dialog-header-item-back,.dialog-header-item-help, .dialog-header-item-complete").removeClass("dialog-header-item-off");
        $(".dialog-header-item-backward, .dialog-header-item-forward, .dialog-header-item-add, .dialog-header-item-edit, .dialog-header-item-delete, .dialog-header-item-print").addClass("dialog-header-item-off");
    });
});
