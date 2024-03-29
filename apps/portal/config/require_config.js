/* global require */

require.config({
    // Be very cautious when playing around with r.js. 
    // Especially when you want to optimize the whole project with r.js 
    // by adding a modules directive to your config. R.js will delete 
    // the output directory without asking. If it happens that it is 
    // accidentally configured to be your system root, r.js will erase your HDD
    // Always add keepBuildDir:true when playing around with r.js
    keepBuildDir:true,
    paths: {
        jquery: 'empty:',
        backbone: '../../vendor/backbone',
        underscore: '../../vendor/underscore',
        plugins: '../../deploy/portal/js/plugins',
        tpl: '../../vendor/plugins/require/tpl'
    },
    shim: {
        'backbone': {
            deps: ['underscore'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'plugins': {
            deps:['backbone']
        }
    },
    name: '../../vendor/almond',
    include: ['main'],
    insertRequire: ['main'],
    wrap: true,
    enforceDefine:true,
    cjsTranslate: true

});

