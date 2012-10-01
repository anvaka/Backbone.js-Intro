BaseCodeModel = Backbone.Model.extend({
    defaults : {
        language : '',
        code : ''
    },

    getCode : function() {
        return this.get('code');
    },

    getCodeText : function() {
        return this.get('code');
    },

    setCode : function(newCode) {
        this.set({ code : newCode }, {silent: true});
        this.trigger('change'); // always trigger this event;
    }
});