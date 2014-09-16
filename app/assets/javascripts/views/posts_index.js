Journal.Views.PostsIndex = Backbone.View.extend({
  events: {
    "click button.delete": "deletePost"
  },
  
  initialize: function(option) {
    
    //debugger
    this.listenTo(this.collection, "sync add remove change:title reset", this.render);
  },
  
  template: JST["posts/index"],
  
  render: function() {
    var renderedContent = this.template({ posts: this.collection });
    this.$el.html(renderedContent);
    return this;
  },
  
  deletePost: function (event) {
    var id = $(event.currentTarget).data('id');
    var post = Journal.Collections.posts.find(function (model) {
      return model.id == id;
    });
    post.destroy();
  }
})