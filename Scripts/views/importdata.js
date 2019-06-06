function getData() {
    var fakeData = [];
    for (var i = 0; i < 20; i++) {
        var obj = {
            date: "03/06/2019",
            voucherNumber: "PN00001",
            voucherType: "Phiếu thu tiền mặt",
            totalMoney: "1000000" + i,
            objectCollect: "Nhà may Hồng Vân",
            reason: "Thêm lý do"
        };
        fakeData.push(obj);
    }
    return fakeData;
}
function loadData() {
    var data = getData();
    $.each(data, function (index, item) {
        var rowHTML = '<div class="row-content">'
            + '<div class="row row-content-check">'
            + '<div class="check-content-table-main">'
            + '<img src="../../Contents/icons/check.png" alt="Check box" class="button-check" />'
            + '</div >'
            + '</div>'
            + '<div class="row row-content-date">'
            + '<div class="cell-date">'
            + item.date
            + '</div>'
            + '</div>'
            + '<div class="row row-content-number-voucher">'
            + '<div class="format-voucher-number">'
            + item.voucherNumber
            + '</div>'
            + '</div>'
            + '<div class="row row-content-type-voucher">'
            + '<div>'
            + item.voucherType
            + '</div>'
            + '</div>'
            + '<div class="row row-content-total">'
            + '<div class="cell-total-money">'
            + item.totalMoney
            + '</div>'
            + '</div>'
            + '<div class="row row-content-object">'
            + '<div>'
            + item.objectCollect
            + '</div>'
            + '</div>'
            + '<div class="row row-content-reason">'
            + '<div>'
            + item.reason
            + '</div>'
            + '</div>'
            + '</div>';
        $(".content-table-body").append(rowHTML);
    });
}

function getDataObject() {
    var fakeData = [];
    for (var i = 0; i < 30; i++) {
        var obj = {
            id: i,
            name: "Nguyễn Văn A",
            type: "Nhà cung cấp"
        };
        fakeData.push(obj);
    }
    return fakeData;
}

function loadDataObject() {
    var data = getDataObject();
    $.each(data, function (index, item) {
        var rowHTML = '<div class="row-select-object">'
            + '<div class="col-select-body col-select-body-id">'
            + '<span>' + item.id + '</span>'
            + '</div>'
            + '<div class="col-select-body col-select-body-name">'
            + '<span>' + item.name + '</span>'
            + '</div>'
            + '<div class="col-select-body col-select-body-type">'
            + '<span>' + item.type + '</span>'
            + '</div>'
            + '</div>';
        $(".wrap-select-object-content").append(rowHTML);
    });
}
$(function () {
    loadData();
    loadDataObject();
});

function getDataEmployee() {
    var fakeData = [];
    for (var i = 0; i < 30; i++) {
        var obj = {
            id: i,
            name: "Nhân viên"
        };
        fakeData.push(obj);
    }
    return fakeData;
}

function loadDataEmployee() {
    var data = getDataEmployee();
    $.each(data, function (index, item) {
        var rowHTML = '<div class="row-employee-object">'
            + '<div class="col-employee-body col-employee-body-id">'
            + '<span>' + item.id + '</span>'
            + '</div>'
            + '<div class="col-employee-body col-employee-body-name">'
            + '<span>' + item.name + '</span>'
            + '</div>'
            + '</div>';
        $(".wrap-select-employee-content").append(rowHTML);
    });
}
$(function () {
    loadData();
    loadDataObject();
    loadDataEmployee();
});