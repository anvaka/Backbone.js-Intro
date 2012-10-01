MarkupCodeModel = BaseCodeModel.extend({
    defaults : {
        language : 'markup',
        code : ['<img src="{{image}}"/>',
                '<p>{{title}}</p>',
                '<p>{{price}}</p>'].join('\n')
    },

    getCodeText : function() {
        return this.get('code')
                   .replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
                   .replace(/\u00a0/g, ' ');
    }
});