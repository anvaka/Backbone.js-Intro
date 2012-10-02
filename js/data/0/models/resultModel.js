ResultModel = Backbone.Model.extend({
    defaults : {
        jsCodeModel : new JavaScriptCodeModel(),
        markupCodeModel : new MarkupCodeModel()
    },
    initialize : function() {
        this.get('jsCodeModel').on('change', this.fireChange, this);
        this.get('markupCodeModel').on('change', this.fireChange, this);
    },
    getTemplateMarkup : function() {
        return this.get('markupCodeModel').getCode();
    },
    getTemplateData : function() {
        return this.get('jsCodeModel').getCode();
    },
    fireChange : function() {
        this.trigger('change');
    }
});