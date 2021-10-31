import express from 'express';
import * as controller from '../controller/postController.js';
import { isAuth } from '../middleware/isAuth.js';
import commentRouter from './commentRouter.js';


const router = express.Router();

//게시물 생성
router.post('/', isAuth, controller.createPost);

//피드 전체 가져오기
router.get('/', isAuth, controller.getPosts);

//게시물 하나 가져오기
router.get('/:id', isAuth, controller.getOnePost);

//게시물 수정
router.put('/:id', isAuth, controller.updatePost);

//게시물 삭제
router.delete('/:id', isAuth, controller.deletePost);

//졸아요 추가
router.put('/like/:id', isAuth, controller.like);

//좋아요 취소
router.put('/unlike/:id', isAuth, controller.unlike)

//댓글 일괄
router.use('/comment', commentRouter);

export default router;