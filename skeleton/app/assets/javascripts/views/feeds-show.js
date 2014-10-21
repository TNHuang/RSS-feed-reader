NewsReader.Views.FeedsShow = Backbone.View.extend({
  template: JST["feeds/show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ model: this.model });
    this.$el.html(content);

    var that = this;
    var $ul = this.$el.find('ul');
    this.model.entries().each(function (entry) {
      var subView = new NewsReader.Views.Entry({model: entry});
      $ul.append(subView.render().$el);
    })

    return this;
  },

  events: {
    "click button.refresh": "refresh"
  },

  refresh: function (event) {
    this.model.fetch();
  }


});