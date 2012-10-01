define(['backbone', 'modules/showModule'], function(Backbone, showModule){
    var AppRouter = Backbone.Router.extend({
          routes: {
              'view/:presentationId/:pageId': 'showPresentation',
              '*actions': 'defaultAction'
          },

          showPresentation: function(presentationId, pageId) {
              showModule.display(presentationId, pageId);
          },

          defaultAction: function(actions) {
              debugger;
          }
      }),

      // Single instance of routes for whole app.
      appRouter;

    return {
        initialize : function() {
            appRouter = new AppRouter();
            Backbone.history.start();
        },

        navigateToSlide : function(presentationId, pageId) {
            if (!appRouter) {
                throw 'Application router is not initialied yet';
            }

            appRouter.navigate('view/' + presentationId + '/' + pageId, { trigger: true});
        }
    };
});

