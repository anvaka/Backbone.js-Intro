define(['require', 'backbone'], function(require){

    var SlideView = Backbone.View.extend({
        
        initialize : function() {
            _.bindAll(this, 'templateLoaded');

            this.isTempalteReady = false;
            
            // asynchronously load tepmlate for this slide:
            var templateName = this.model.get('template');
            require(['text!templates/slides/' + templateName + '.mtpl'], this.templateLoaded);
        },

        render : function() {
            if (!this.isTempalteReady) {
                this.needsRerender = true;
                return; // Delay render until template is loaded.
            }

            this.$el.html(this.template(this.model.get('data')));
        },

        templateLoaded : function(templateText) {
            this.template = Mustache.compile(templateText);
            this.isTempalteReady = true;
 
            if (this.needsRerender) {
                this.render();
            }
        }
    });

    return SlideView;
});