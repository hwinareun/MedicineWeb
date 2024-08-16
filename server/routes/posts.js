const express = require('express');
const router = express.Router();
const {
    getPostList,
    getPost,
    addPost,
    modifyPost,
    removePost
} = require('../controllers/postController');

router.get('/', getPostList);
router.get('/:postId', getPost);
router.post('/', addPost);
router.put('/:postId', modifyPost);
router.delete('/:postId', removePost);

module.exports = router;