define(
    ['text!templates/presentationView.mtpl',
     'viewmodels/slideView'], 

function (templateText, SlideView) {
    return Backbone.View.extend({
        el : 'body',
        
        events: {
            "click .button.prevSlide" : "triggerShowPrevSlide",
            "click .button.nextSlide" : "triggerShowNextSlide",
            "keydown" : 'handleKeyboardInput',
        },

        initialize : function() {
            _.bindAll(this, 'currentPageChanged');

            this.compiledTemplate = Mustache.compile(templateText);
            this.model.on('change:currentPage', this.currentPageChanged);
        },
        
        render : function() {
            // render ourself:
            this.$el.html(this.compiledTemplate(this.model.toJSON()));
        },

        triggerShowNextSlide : function() {
            this.model.goForward();
        },
        
        triggerShowPrevSlide : function() {
            this.model.goBack();
        }, 

        handleKeyboardInput : function(e) {
            switch (e.keyCode) {
                case 37: // left
                case 38: // up
                    this.triggerShowPrevSlide();
                    e.preventDefault();
                    break;
                case 32: // spacebar
                case 39: // right
                case 40: // down
                    this.triggerShowNextSlide();
                    e.preventDefault();
                    break;
            }
        },

        currentPageChanged : function(direction) {
            // render child views:
            this.slideView = new SlideView({
                el : this.$('#slideContent'),
                model : this.model.getCurrentSlide()
            });

            this.slideView.render();
        }
    });
});