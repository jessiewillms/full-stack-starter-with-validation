var Post = require('./model.js');

exports.index = function(req, res) {
  Post.find()
  .then((posts) => res.send(posts));
}

exports.show = function(req, res) {
  Post.findById(req.params.id)
  .then((posts) => res.send(posts))
  .catch((err) => res.send(404));
}

// Before you implement these methods, make sure you're including the body-parser
// middleware in index.js

exports.update = function(req, res) {
  // Implement your update logic here
  // To find the post to update, use Post.findById(req.params.id)
  // Remember that this returns a promise, so you'll need to work with the
  // returned post in a .then() call. Also, remember to save()!
  // If you can't find the post, return a 404.
  // 
  Post.findById(req.params.id)
    .then((post) => {
      post.title = req.body.title;
      post.description = req.body.description;
      post.category = req.body.category;
      post.user = req.body.user;
      post.image = req.body.image;
      post.timer = req.body.timer;

      post.save().then(() => {
        res.send(post);
      });

    }).catch((err) => {
      res.status(404);
    })
    .catch( () => {
      res.send(422);
      res.send(err);
    });
  // res.send("Not implemented");
}

exports.create = function(req, res) {
  // Implement your create logic here. Create a new post with var post = new Post()
  // Remember to save!
  // 
  var post = new Post();

    post.title = req.body.title;
    post.description = req.body.description;
    post.category = req.body.category;
    post.user = req.body.user;
    post.image = req.body.image;
    post.timer = req.body.timer;

    post.save()
    .then(() => {
        res.send(post);
    })
    .catch((err) => {
      // need to send status code to show that there's an error 
      res.status(422); // 422 is the standard 
      res.send(err);
    })
}
