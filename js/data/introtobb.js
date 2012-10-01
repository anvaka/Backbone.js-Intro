define([], {
    id : 0,
    title: 'Introduction to Backbone.js',
    meta: {
        description: 'This presentation shows one way (out of many) to organize your modern javascript application',
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
                subtitle: '(one way to organize modern JS apps)',
                author: 'Andrei Kashcha (@anvaka)',
            },
        },
        {
            template: 'generic-header-list',
            data: {
                title: 'Agenda',
                list: [
                    'Agenda',
                    'World of MV(C|P|VM)',
                    'Problem with JavaScript',
                    'require.js + underscore.js + backbone.js + ... = ?'
                ]
            }
        },
    ]
});