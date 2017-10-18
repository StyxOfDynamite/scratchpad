requirejs.config({
    paths: {
        jquery: "../vendor/jquery/jquery.min",
        popper: "../vendor/popper/popper.min",
        bootstrap: "../vendor/bootstrap/js/bootstrap.min",
    },
    shim: {
        bootstrap: {
            deps: ['jquery', 'popper']
        }
    }
});

//Define dependencies and pass a callback when dependencies have been loaded
require(["jquery", "bootstrap"], function ($, bootstrap) {
    //Bootstrap and popper and jquery are ready to use here
    //Access jquery and bootstrap plugins with $ variable
    require(["popper"], function(popper) {
        window.Popper = popper;
        require([bootstrap]);
    });
});
