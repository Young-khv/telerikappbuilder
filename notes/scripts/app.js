// Global access point
var App = {};

define(function (require) {
    var listView = require('views/list');
    var formView = require('views/form');

    function initViews() {
        App.views = {
            listView: listView,
            formView: formView
        };
    }

    function initMobile() {
        var options = {
            initial: 'list',
            skin: 'flat'
        };
        App.mobile = new kendo.mobile.Application(document.body, options);
    }

    function init() {
        initViews();
        initMobile();
    }

    return {
        init: init
    };
});