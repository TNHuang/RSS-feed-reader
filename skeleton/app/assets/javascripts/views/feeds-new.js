NewsReader.Views.NewFeed = Backbone.View.extend({
  template: JST["feeds/new"],

  render: function () {
    var content = this.template({collection: this.collection, feed: this.model});
    this.$el.html(content);
    return this;
  },

  events: {
    "submit form": "createFeed"
  },

  createFeed: function (event) {
    var formData = $(event.currentTarget).serializeJSON();
    var feed = this.collection.create(formData);
    Backbone.history.navigate("#", {trigger: true});
  }
});