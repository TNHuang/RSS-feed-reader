NewsReader.Models.Feed = Backbone.Model.extend({
  url: function () {
    if (this.isNew()) {
      return "api/feeds"
    }else{
      return "api/feeds/"+ this.get("id");
    }
  },

  entries: function () {

    this._entries = this._entries
        || new NewsReader.Collections.Entries([], {feed: this});

    return this._entries;
  },

  parse: function (response) {

    if (response.latest_entries) {

      this.entries().set(response.latest_entries, {parse: true});

      delete response.latest_entries;
    }

    return response;
  }
});