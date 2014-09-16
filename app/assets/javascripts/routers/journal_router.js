Journal.Routers.JournalRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/new": "postsNew",
    "posts/:id": "postsShow"
  },
  
  postsIndex: function () {
    Journal.Collections.posts.fetch();
    
    var indexView = new Journal.Views.PostsIndex({
      collection: Journal.Collections.posts
    });
    
    $("div.sidebar").html(indexView.render().$el);
  },
  
  postsShow: function (id) {
    var post = Journal.Collections.posts.getOrFetch(id);
    var showView = new Journal.Views.PostsShow({
      model: post
    });
    
    $("div.content").html(showView.render().$el)
  },
  
  postsNew: function () {
    var newView = new Journal.Views.PostsNew();
    $("div.content").html(newView.render().$el)
  }
})