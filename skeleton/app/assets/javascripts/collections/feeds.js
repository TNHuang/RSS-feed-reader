NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: "/api/feeds",
  model: NewsReader.Models.Feed,

  getOrFetch: function (id) {
    var feed = this.get(id);
    if (feed) {
      feed.fetch();
    }else {
      feed = new NewsReader.Models.Feed({id: id});
      var collection = this;
      feed.fetch({
        success: function () {collection.add(feed);}
      })
    }
    return feed;
  }
});

NewsReader.Collections.feeds = new NewsReader.Collections.Feeds();