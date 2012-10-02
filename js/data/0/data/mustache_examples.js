mustache_examples = {
    list :  [
            {
                name : 'Variables',
                code : {
                    "name": "31337",
                    "company": "<b>GitHub</b>"
                },
                template : [
                            "<ul>",
                            "  <li>{{name}}</li>",
                            "  <li>{{age}}</li>",
                            "  <li>{{company}}</li>",
                            "  <li>{{{company}}}</li>",
                            "  <li>{{&company}}</li>",
                            "</ul>",
                            ].join('\n')
            },
            {
                name : 'Dot notation',
                code : {
                    "name": {
                        "first": "Trygve",
                        "last": "Reenskaug"
                    },
                    "about": "MVC Creator"
                },
                template : "{{name.first}} {{name.last}} - {{about}}"
            },
            {
                name : 'Sections',
                code : {
                    "name": {
                        "first": "Trygve",
                        "last": "Reenskaug"
                    },
                    "about": "MVC Creator"
                },
                template : [
                    "{{#name}}",
                    "{{first}} {{last}}",
                    "{{/name}} - {{about}}"
                ].join('\n')
            },
            {
                name: 'Falsy Sections',
                code : {
                  "person": false
                },
                template:  [
                    "Shown.",
                    "{{#person}}",
                    "Never shown!",
                    "{{/person}}"].join('\n')
            },
            {
                name: 'Non Empty List',
                code : {
                    "stooges": [
                            { "name": "Moe" },
                            { "name": "Larry" },
                            { "name": "Curly" }
                    ]
                },
                template : ["{{#stooges}}",
                        "<b>{{name}}</b>",
                        "{{/stooges}}"].join('\n')
            },
            {
                name: 'Functions',
                code : {
                    "date": function () { return new Date(); }
                },
                template : "{{date}}"
            },
            {
                name: 'Section Functions',
                code : {
                    "name": "Tater",
                    "bold": function () { 
  return function (text, render) { return "<b>" + render(text) + "</b>"; } }
                },
                template : "{{#bold}}Hi {{name}}.{{/bold}}"
            },
            {
                name : 'Write in C',
                code : {
                    "videoId": "XHosLhPEN3k",
                    "width": "480",
                    "height": "360"
                },
                template : ['<iframe width="{{width}}"',
                            '        height="{{height}}"',
                            '        src="http://www.youtube.com/embed/{{videoId}}?rel=0"',
                            '        frameborder="0"',
                            '        allowfullscreen></iframe>'].join('\n')
            },

    ]
}