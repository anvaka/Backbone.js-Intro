define(['viewmodels/presentationView', 'data/presentationsRepository'], function(PresentationView, repository){
    var view = null;

    return {
        display : function(presentationId, pageId) {
            // Fetch the model from repository:
            repository.getModel(presentationId, function(model) {
                
                if (!view) {
                    view = new PresentationView({
                        model : model
                    });
                    view.render();
                }

                model.set({ currentPage : pageId });
            });
        }
    };
});