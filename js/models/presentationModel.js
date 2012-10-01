define(['models/SlideModel'], function(SlideModel){
    var PresentationModel = Backbone.Model.extend({
            defaults : {
                currentPage : 0
            },

            initialize : function(rawData) {
                debugger;
                this.slides = new Backbone.Collection(rawData.slides, {
                    model: SlideModel
                });
            },

            getCurrentSlide : function() {
                return this.slides.models[this.get('currentPage')];
            },

            goForward : function() {
                this._internalGo(parseInt(this.get('currentPage'), 10) + 1);
            },

            goBack : function() {
                this._internalGo(parseInt(this.get('currentPage'), 10) - 1);
            },

            _internalGo : function(slideNumber) {
                var slidesCount = this.slides.length;

                if (0 <= slideNumber && slideNumber < slidesCount) {
                    var router = require('router');
                    router.navigateToSlide(this.get('id'), slideNumber);
                }
            }
        });

    return PresentationModel;
});