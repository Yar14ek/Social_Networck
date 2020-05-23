const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters'],
  },
  photo: String,
  //  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

module.exports = mongoose.model('User', UserSchema);
