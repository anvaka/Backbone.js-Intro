BaseCodeModel = Backbone.Model.extend({
    defaults : {
        code : '', // what to display?
        language : '' // Javascript? HTML? CSS?
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