$(function () {
    $("#dialog-delete").dialog({
        autoOpen: false,
        resizable: false,
        height: 156,
        width: 400,
        modal: true,
        dialogClass: "no-close",
        classes: {
            "ui-dialog-title": "custom-title",
            "ui-dialog-titlebar-close": "btn-close-dialog-delete",
            "ui-dialog-titlebar": "content-dialog-title-delete"
        }
    });
});
$(document).ready(function () {
    $(".toolbar-item-delete").on("click", function () {
        $("#dialog-delete").dialog('open');
    });
    $(".btn-delete-cancel").on("click", function () {
        $("#dialog-delete").dialog('close');
    });
    $(".dialog-header-item-delete").on("click", function () {
        $("#dialog-delete").dialog('open');
    });
});