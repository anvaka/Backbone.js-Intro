define([], {
    id : 0,
    title: 'Introduction to Backbone.js',
    meta: {
        description: 'This presentation shows one way (out of many) to organize your javascript application',
        author: {
            name: 'Andrei Kashcha',
            contact: {
                email: 'anvaka@gmail.com',
                twitter: 'anvaka',
                github: 'anvaka',
            }
        },
    },
    theme: 'classic-white',
    slides: [ 
        {
            template: 'generic-intro',
            data: {
                title: 'Introduction to Backbone.js',
                subtitle: '(a way to organize modern JS apps)',
                author: {
                    name: 'Andrei Kashcha',
                    twitter: 'anvaka',
                    email: 'anvaka@gmail.com'
                }
            },
        },
        {
            template: 'generic-header-list',
            data: {
                title: 'Agenda',
                list: [
                    'Agenda',
                    'World of MV(C|P|VM)',
                    'Example',
                    'underscore.js + backbone.js + mustache.js + ... = ?',
                    'Q&A, Links'
                ]
            }
        },
        {
            template: 'generic-image',
            data: {
                title: 'Trygve Reenskaug',
                image: 'js/data/0/images/Reenskaug_Trygve.jpg'
            }
        },
        {
            template: 'generic-image',
            data: {
                title: 'Model-View-Controller',
                image: 'js/data/0/images/MVC-Process.png'
            }
        },
        {
            template: 'iframe-slide',
            data: {
                title: 'MVC Applied to JavaScript?',
                url: 'js/data/0/mvc_in_js.html' 
            }
        },
        {
            template: 'generic-image',
            data: {
                title: 'Previous Slide - Structure',
                image: 'js/data/0/images/PrevSlideExplained.png'
            }
        },
        {
            template: 'generic-image',
            data: {
                title: 'Previous Slide - Code Model and View',
                image: 'js/data/0/images/CodeModelView.png'
            }
        },
        {
            template: 'iframe-slide',
            data: {
                title: 'Model - How Backbone Does It',
                url: 'js/data/0/code_view.html',
                args: 'models/baseCodeModel.js'
            }
        },
        {
            template: 'iframe-slide',
            data: {
                title: 'View - How Backbone Does It',
                url: 'js/data/0/code_view.html',
                args: 'views/codeView.js'
            }
        },
        {
            template: 'iframe-slide',
            data: {
                title: 'Result Model',
                url: 'js/data/0/code_view.html',
                args: 'models/resultModel.js'
            }
        },
        {
            template: 'iframe-slide',
            data: {
                title: 'Result View',
                url: 'js/data/0/code_view.html',
                args: 'views/resultView.js'
            }
        },
        {
            template: 'iframe-slide',
            data: {
                title: 'mustache',
                url: 'js/data/0/mustache_demo.html'
            }
        },
        {
            template: 'iframe-slide',
            data: {
                title: 'Auto fetch - backbone.js',
                url: 'js/data/0/mvc_in_js_auto_update.html' 
            }
        },
        {
            template: 'iframe-slide',
            data: {
                title: 'How hard was that?',
                url: 'js/data/0/code_view.html',
                args: 'utils/listenToServerChange.js'
            }
        },
        { 
            template: 'generic-header-links-list',
            data: {
                title: 'QA & Reference',
                list: [
                    {name : 'backbone.js', url: 'http://backbonejs.org/'},
                    {name : 'underscore.js', url: 'http://underscorejs.org/'},
                    {name : 'mustache', url: 'https://github.com/janl/mustache.js'},
                    {name : 'require.js', url: 'http://requirejs.org/'},
                    {name : 'Backbone Tutorials', url: 'http://backbonetutorials.com/'},
                    {name : 'This presentation source code', url: 'https://github.com/anvaka/Backbone.js-Intro'},
                    
                ]
            }
        }
    ]
});