//Hàm hiển thị lịch chọn thời gian
//Tạo bởi NVMANH 23/5/2019
jQuery(function ($) {
    $.datepicker.regional["vi-VN"] =
        {
            closeText: "Đóng",
            prevText: "Trước",
            nextText: "Sau",
            currentText: "Hôm nay",
            monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            monthNamesShort: ["Một", "Hai", "Ba", "Bốn", "Năm", "Sáu", "Bảy", "Tám", "Chín", "Mười", "Mười một", "Mười hai"],
            dayNames: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
            dayNamesShort: ["CN", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy"],
            dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            weekHeader: "Tuần",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };

    $.datepicker.setDefaults($.datepicker.regional["vi-VN"]);
});
$(document).ready(function () {
    $(".begin-date, .end-date, .header-form-control-date, .dialog-date-input, .dialog-input-calender-debt, #collect-input-2").datepicker({
    dateFormat: "dd/mm/yy",
    showOtherMonths: true,
    yearRange: "1900:2099",
    showButtonPanel: true
});
function showDateTimePicker(e1, e2) {
    $("body").on('click', e1 ,function () {
        $(e2).datepicker("show");
    });
}
$.datepicker._gotoToday = function (id) {
    var inst = this._getInst($(id)[0]);

    var date = new Date();
    this._selectDay(id, date.getMonth(), date.getFullYear(), inst.dpDiv.find('td.ui-datepicker-today'));
};

    showDateTimePicker(".begin", ".begin-date");
    showDateTimePicker(".end", ".end-date");
    showDateTimePicker(".icon-date-header", ".header-form-control-date");
    showDateTimePicker(".dialog-icon-calender-date", ".dialog-date-input");
    showDateTimePicker(".dialog-icon-calender-debt", ".dialog-input-calender-debt");
    showDateTimePicker(".icon-down-2", "#collect-input-2");
});
//Hàm đặt thời gian mặc định khi tải trang 
//Người tạo NVMANH 5/6/2019
function getDatePicker(input) {
    var now = new Date();
    var today = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
    $(input).val(today);
}
$(document).ready(function () {
    getDatePicker(".header-form-control-date");
    getDatePicker(".begin-date");
    getDatePicker(".end-date");
    getDatePicker(".dialog-date-input");
    getDatePicker(".dialog-input-calender-debt");
    getDatePicker("#collect-input-2");
});

//Hàm hiển thị giá trị item lên combobox
//Tạo bởi NVMANH 23/5/2019
function showItem(item, namecombobox) {
    $(item).on('click', function () {
        $(namecombobox).attr("value", $(this).html());
    });
}
$(document).ready(function () {
    showItem(".type-voucher", ".select-type-voucher-item");
    showItem(".range-item", ".select-range-item");
    showItem(".object-item", ".select-object-item");
    showItem(".type-calc-item", ".select-type-calc");
});

//Hiển thị kí tự lên combobox của header bảng
//Tạo bởi NVMANH 23/5/2019
function showAnotationCombobox(item) {
    $(item).on('click', function () {
        var content = $(this).find('span').text();
        $(this).parent().prev().find('span').text(content);
    });
}
showAnotationCombobox(".item-compare");
showAnotationCombobox(".item-total");
showAnotationCombobox(".item-number-voucher");
showAnotationCombobox(".item-object");
showAnotationCombobox(".item-reason");

//Hàm hiển thị comboBox
//Tạo bởi NVMANH 23/5/2019

function toggleCombobox(icon, comboboxitem) {
    $(document).ready(function () {
        $(icon).click(function (event) {
            event.stopPropagation();
            $(comboboxitem).toggle();
        });
        $(comboboxitem).on("click", function (event) {
            event.stopPropagation();
        });
    });

    $(document).on("click", function () {
        $(comboboxitem).hide();
    });
    $(document).ready(function () {
        $(comboboxitem).on('click', function () {
            $(comboboxitem).hide();
        });
    }); 
}

toggleCombobox(".combobox-add", ".combobox-item");
toggleCombobox(".icon-down-range-item", ".combobox-range-item");
toggleCombobox(".icon-down-type-voucher", ".combobox-type-voucher");
toggleCombobox(".wrap-select-object-pay", ".combobox-object-item");
toggleCombobox(".box-btn-compare", ".box-item-compare");
toggleCombobox(".box-btn-total", ".box-item-total");
toggleCombobox(".box-btn-number-voucher", ".box-item-number-voucher");
toggleCombobox(".box-btn-object", ".box-item-object");
toggleCombobox(".box-btn-reason", ".box-item-reason");
toggleCombobox("#combobox-before-down", ".combobox-item-before");
toggleCombobox("#combobox-after-down", ".combobox-item-after");
toggleCombobox("#combobox-print-down", ".combobox-item-print");
toggleCombobox(".icon-input-down-object", ".table-select-object");
toggleCombobox(".icon-input-down-employee", ".table-select-employee");
toggleCombobox(".wrap-voucher-calc-input", ".combobox-type-calc-item");

//Hàm checkbox
//Tạo bởi NVMANH 23/5/2019
$("body").on('click', ".check", function () {
    $(this).children().toggle();
    if ($(".check img:visible").length > 0) {
        $(".content-table-body").find("img").show();
    } else {
        $(".content-table-body").find("img").hide();
    }
});
function tickCheckBox(input) {
    $("body").on('click', input, function () {
        $(this).children().toggle();
    });
}
tickCheckBox(".check-content-table-main");
tickCheckBox(".btn-check-calc-collect");
tickCheckBox(".btn-check-calc-pay");

//Hàm tạo thanh cuộn ngang giữa thân bảng và hàng tính toán tổng tiền
//Người tạo NVMANH 25/5/2019
$(".content-table-main").scroll(function () {
    $(".content-table-total").scrollLeft($(".content-table-main").scrollLeft());
});
$(".content-table-main").scroll(function () {
    $(".content-table-header").scrollLeft($(".content-table-main").scrollLeft());
});

$(".box-detail-table-body").scroll(function () {
    $(".box-detail-table-total").scrollLeft($(".box-detail-table-body").scrollLeft());
});
$(".box-detail-table-body").scroll(function () {
    $(".box-detail-table-header").scrollLeft($(".box-detail-table-body").scrollLeft());
});

//Hàm hiện dialog xem bản ghi khi click vào số chứng từ
//Người tạo NVMANH 6/6/2019
$(document).ready(function () {
    $("body").on("click",".format-voucher-number",function () {
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
        console.log(1);
    });
});

//Hàm định dạng số cột tổng tiền
//Người tạo NVMANH 6/6/2019
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
