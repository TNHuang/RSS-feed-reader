NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST["feeds/index"],

  initialize: function (options) {
    this.listenTo(this.collection, "sync remove add", this.render);
  },

  render: function () {
    var view = this.template({ collection: this.collection });

    this.$el.html(view);

    return this;
  },

  events: {
    "click button.delete": "deleteFeed",
    "click button.new-feed": "createFeed"
  },

  deleteFeed: function (event) {
    var feedId = $(event.currentTarget).data('id');
    this.collection.get(feedId).destroy();
    Backbone.history.navigate("#", {trigger: true});
  },

  createFeed: function (event) {
    Backbone.history.navigate("#/feeds/new", {trigger: true});
  }

});