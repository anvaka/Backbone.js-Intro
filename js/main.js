require.config({
    shim: {
        'backbone' : {
            deps : ['underscore', 'jquery', 'mustache'],
            exports : 'Backbone'
        }
    },
    
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone : 'lib/backbone',
        mustache : 'lib/mustache',
        text     : 'lib/text'
    }
});

require([
    'router',
    'mustache'
    ],
    function(router, mustache){
        Mustache = mustache;
        router.initialize();
});

