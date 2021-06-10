import express from 'express';
import { getPosts, createPost, showPost, updatePost, deletePost, likePost } from '../controller/posts.js';
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', showPost);
router.post('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
export default router;
