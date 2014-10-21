window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new NewsReader.Routers.Feeds();
    Backbone.history.start();

  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
