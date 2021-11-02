import express from 'express'
import * as controller from '../controller/searchController.js'
import { isAuth } from '../middleware/isAuth.js'

const router = express.Router();

//일반 검색(해시태그 + 유저)
//GET /search?keyword=:keyword
router.get('/', controller.search)

//해시태그 검색
//GET /search/hashtag?keyword=:hashtag
router.get('/hashtag', controller.searchByHashtag)

export default router;