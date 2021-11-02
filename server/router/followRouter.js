import express from 'express';
import * as controller from '../controller/followController.js';
import { isAuth } from '../middleware/isAuth.js';

const router = express.Router();

//팔로우
//PUT /follow/:Id
router.put('/:user', isAuth, controller.follow);

//언팔로우
//PUT /follow/unfollow/:Id
router.put('/unfollow/:user', isAuth, controller.unfollow);

export default router;