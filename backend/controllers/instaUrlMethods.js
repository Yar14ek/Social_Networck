const mongoose = require('mongoose');
const connectDB = require('../config/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

//@desc    Create new user
//@rout    POST  SocialNetwork/user/create
exports.createNewUser = asyncHandler(async (req, res, next) => {
  await connectDB();
  console.log('req. :', req.body);
  const newUser = await User.create(req.body);
  if (!newUser) {
    return next(new ErrorResponse(`Not found ${req.body}`, 500));
  }
  res.status(201).json({
    sucsess: true,
    body: newUser,
  });
  mongoose.disconnect();
});

//@desk    Create new post
//@rout    POST SocialNetwork/post/create/
exports.createNewPost = asyncHandler(async (req, res, next) => {
  await connectDB();
  //  const creatorId = req.params.id;
  const post = await Post.create(req.body);
  //  post.creator_id = creatorId;
  await post.save();
  // const userID = await User.findById(id);
  // userID.posts.push(post);
  // await userID.save();
  // if (!userID) {
  //   return new ErrorResponse(`Not found id of ${req.params.id}`, 500);
  // }
  if (!post) {
    return new ErrorResponse(`Not found body ${req.body}`, 500);
  }
  res.status(200).json({
    sucsess: true,
    body: post,
  });
  mongoose.disconnect();
});

//@Desc    Create new comment
//@rout    POST SocialNetwork/post/comment/
exports.createNewComment = asyncHandler(async (req, res, next) => {
  await connectDB();
  // const id = req.params.id;
  const comment = await Comment.create(req.body);
  await comment.save();
  const postByID = await Post.findById(id);
  postByID.comments.push(comment);
  await postByID.save();

  res.status(201).json({
    sucsess: true,
    body: comment,
  });
  mongoose.disconnect();
});

//@desc    Get all posts from User
//@rout    GET SocialNetwork/user/find/post/:id
exports.getAllPostsByUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id).populate('posts');
  if (!user) {
    return new ErrorResponse(`Not found id of ${req.params.id}`, 500);
  }
  res.status(200).json({
    sucsess: true,
    body: user.posts,
  });
});

//@Desc    Get oll comment from one post
//@Rout    GET SocialNetwork/post/find/comment/:id
exports.getAllCommentsByPost = asyncHandler(async (req, res, next) => {});

//@desc    Get user by post
//rout     GET SocialNetwork/post/populate/:id
exports.getUserByPost = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const userByPost = await User.findById(id);
  // console.log('userByPost :', userByPost._id);
  if (!userByPost) {
    return new ErrorResponse(`Not found id of ${req.params.id}`, 500);
  }
  res.status(200).json({
    sucsess: true,
    body: {
      id: userByPost._id,
      name: userByPost.name,
      photo: userByPost.photo,
    },
  });
});

//@desc    Add likes by post
//rout     PUT SocialNetwork/post/update/:id
exports.updatePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    sucsess: true,
    body: post,
  });
});
