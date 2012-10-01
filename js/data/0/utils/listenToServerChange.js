function listenToServerChange(model, modelEndpoint) {
    model.urlRoot = modelEndpoint;
    setInterval(function () { model.fetch(); }, 2000);
}