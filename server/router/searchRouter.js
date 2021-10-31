import express from 'express'
import * as controller from '../controller/searchController.js'


const router = express.Router();

//해시태그 검색
router.get('/hashtag', controller.searchByHashtag)

//사용자 검색
router.get('/user', controller.searchByUser);

export default router;