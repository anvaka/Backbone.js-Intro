ResultView = Backbone.View.extend({
    initialize : function() {
        this.model.on('change', this.render, this);
    },

    render : function() {
        var templateMarkup = this.model.getTemplateMarkup(),
            templateData = this.model.getTemplateData(),

        // Use Mustache to render template and data:
            finalHTML = Mustache.render(templateMarkup, templateData);
        // Mustache works by expanding tags in a template 
        // using values provided in a hash or object

        this.$el.html(finalHTML);
    }
});