var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

var PostSchema = new mongoose.Schema({
  title: {
  	type: String,
  	required: true,
  },
  description: String,
  location: {
  	type: String,
  	enum: ['Toronto','Vancouver','Ottawa','Montreal'],
  },
  user: {
  	type: String,
  	required: true,
  },
  image: {
  	type: String,
  	match: ".jpg",
  },
  comment_count: Number,
  user_details: UserSchema
});

module.exports = mongoose.model('Post', PostSchema);
