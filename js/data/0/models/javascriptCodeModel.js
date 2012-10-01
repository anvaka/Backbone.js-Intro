JavaScriptCodeModel = BaseCodeModel.extend({
    defaults : {
        language : 'javascript',
        code : { 
            image : 'book_cover.jpg',
            title : 'Javascript: The Good Parts',
            price : '$29.99' 
        }
    },

    getCodeText : function() {
        return JSON.stringify(this.get('code'), null, 2);
    },

    setCode : function(newCode) {
        var code = JSON.parse(newCode);
        this.set({ code : code }, {silent: true});
        this.trigger('change'); // always trigger this event;
    }
});