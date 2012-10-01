define(
    ['require', 'models/presentationModel'], 

    function(require, PresentationModel) {
        var cache = {},
            basePath = 'data/';

        return {
            getModel : function(presentationId, callback) {
                var model = cache[presentationId];
                
                if (!model) {
                    // load dynamically
                    require([basePath + presentationId + '/index'], function(rawData) {
                        model = cache[presentationId] = new PresentationModel(rawData);
                        callback(model);
                    });
                } else {
                    callback(model);
                }
            }
        };
    }
);