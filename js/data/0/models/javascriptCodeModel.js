JavaScriptCodeModel = BaseCodeModel.extend({
    defaults : {
        language : 'javascript',
        code : { 
            image : 'images/book_cover.jpg',
            title : 'Javascript: The Good Parts',
            price : '$29.99' 
        }
    },

    getCodeText : function() {
        return JSONx.stringify(this.get('code'), 2).replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
                   .replace(/\u00a0/g, ' ');
    },

    setCode : function(newCode) {
        var code = JSONx.parse(newCode);
        this.set({ code : code }, {silent: true});
        this.trigger('change'); // always trigger this event;
    }
});