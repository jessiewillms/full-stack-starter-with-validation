var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

var PostSchema = new mongoose.Schema({
  title: {
  	type: String,
  	required: true,
    minlength: 5,
    maxlength: 50,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
  	type: String,
  	enum: ['Sports', 'Politics', 'Arts', 'Life', 'City'],
  },
  user: {
  	type: String,
  	// required: true,
  },
  image: {
  	type: String,
  },
  timer: {
    type: Number,
    min: 0,
    max: 30,
  },
  comment_count: Number,
  user_details: UserSchema
});

module.exports = mongoose.model('Post', PostSchema);
