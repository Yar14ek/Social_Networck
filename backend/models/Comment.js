const mongoose = require('mongoose');

const CommentShema = mongoose.Schema({
  //  id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: [true, 'Please add a title'] },
  date: { type: Date, default: Date.now },
  creator_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
});

module.exports = mongoose.model('Comment', CommentShema);
