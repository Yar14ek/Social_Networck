const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: { type: String, required: [true, 'Please add a title'] },
  //  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  creator_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  likes: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', PostSchema);
