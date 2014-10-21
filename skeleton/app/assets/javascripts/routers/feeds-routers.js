NewsReader.Routers.Feeds = Backbone.Router.extend({
  routes: {
    "": "feedsIndex",
    "feeds/new": "feedCreate",
    "feeds/:id": "feedShow"
  },

  feedsIndex: function () {

    var collection = NewsReader.Collections.feeds;

    var feeds = new NewsReader.Views.FeedsIndex({collection: collection});

    collection.fetch();

    this._swapView(feeds);
    // $('div#content').html(feeds.render().$el);
  },

  feedCreate: function () {
    var collection = NewsReader.Collections.feeds;
    var model = new NewsReader.Models.Feed();

    var newFeed = new NewsReader.Views.NewFeed({model: model, collection: collection});

    this._swapView(newFeed);
    // $("div#content").html(newFeed.render().$el);
  },

  feedShow: function (id) {

    var model = NewsReader.Collections.feeds.getOrFetch(id);

    var feedsShow = new NewsReader.Views.FeedsShow({model: model});

    this._swapView(feedsShow);
    // $('div#content').html(feedsShow.render().$el);
  },

  _swapView: function (newView) {
    if(this.currentView){
      this.currentView.remove();
    }
    $('div#content').html(newView.render().$el);
    this.currentView = newView
  }

});
