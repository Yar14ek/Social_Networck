const express = require('express');
const router = express.Router();

const {
  createNewUser,
  createNewPost,
  getAllPostsByUser,
  getUserByPost,
  updatePost,
  createNewComment,
} = require('../controllers/instaUrlMethods');
//users methods
router.route('/user/create').post(createNewUser);
router.route('/user/find/post/:id').get(getAllPostsByUser);

//posts methods
router.route('/post/create/').post(createNewPost);
router.route('/post/populate/:id').get(getUserByPost);
router.route('/post/update/:id').put(updatePost);

//comments methods
router.route('/post/comment/').post(createNewComment);

module.exports = router;
