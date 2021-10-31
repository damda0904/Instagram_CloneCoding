import express from 'express';
import * as controller from '../controller/commentController.js'
import { isAuth } from '../middleware/isAuth.js';

const router = express.Router();

//댓글 가져오기
router.get('/:postId', isAuth, controller.getComments)

//댓글 추가
router.post('/:postId', isAuth, controller.createComment)

//댓글 삭제
router.delete('/:id', isAuth, controller.deleteComment)

//댓글 좋아요 추가
router.put('/like/:id', isAuth, controller.likeComment)

//댓글 좋아요 취소
router.put('/unlike/:id', isAuth, controller.unlikeComment);

//대댓글 작성
router.post('/childComment/:id', isAuth, controller.createChild);

export default router;