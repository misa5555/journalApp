window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Journal.Routers.JournalRouter();
    Backbone.history.start();
  }
};


$(Journal.initialize);
