ResultView = Backbone.View.extend({
    initialize : function() {
        this.model.on('change', this.render, this);
    },

    render : function() {
        var templateMarkup = this.model.getTemplateMarkup(),
            templateData = this.model.getTemplateData();

        // Use Mustache to render template and data:
        this.$el.html(Mustache.render(templateMarkup, templateData));
    }
});