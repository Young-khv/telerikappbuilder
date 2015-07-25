(function (window) {
    require.config({
        baseUrl: '/scripts'
    });

    require([
        'app'
    ], function (App) {
        App.init();
    });
})(window);