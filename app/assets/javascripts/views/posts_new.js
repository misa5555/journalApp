Journal.Views.PostsNew = Backbone.View.extend({
  template: JST['posts/new'],
  
  initialize: function () {
    this.listenTo(Journal.Collections.posts, "add", function(post) {
      Backbone.history.navigate("posts/"+post.id, {trigger: true})});
  },
  
  events: {
    "submit form": "submit"
  },
  
  render: function () {
    var post = new Journal.Models.Post();
    var renderedContent = this.template({ post: post });
    this.$el.html(renderedContent);
    return this;
  },
  
  submit: function (event) {
    event.preventDefault();
    
    var params = $(event.currentTarget).serializeJSON();
    var newPost = new Journal.Models.Post(params["post"]);
     
    newPost.save({}, {
      success: function () { 
        Journal.Collections.posts.add(newPost);
        
        Backbone.history.navigate("/", {trigger: true});
      },
      error: function (model, response) {
        this.$el.find("div#error").html(response.responseText); 
        //console.log(response);
        debugger;
      }.bind(this)
    });
  }
});