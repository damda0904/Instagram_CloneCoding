import express from 'express';
import 'express-async-errors';
import { body, } from 'express-validator';
import * as controller from '../controller/authController.js'
import { validate, checkSignupId } from '../middleware/validate.js';
import { isAuth } from '../middleware/isAuth.js';


const validateCredential = [
    body('userId')
        .trim()
        .notEmpty()
        .custom((value, { req }) => checkSignupId)
        .withMessage('username should be email or phone number'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('password should be existed'),
    validate
]

const validateSignup = [
    ...validateCredential,
    body('userId')
        .trim()
        .notEmpty()
        .withMessage('userID should be existed'),
    body('name')
        .trim()
        .notEmpty()
        .withMessage('userID should be existed'),
    body('username')
        .trim()
        .notEmpty()
        .withMessage('username should be existed'),
    validate
];




const router = express.Router();

//회원가입
router.post('/signup', validateSignup, controller.signup);

//로그인
router.post('/login', validateCredential, controller.login);

//로그인 확인
router.get('/me', isAuth, controller.me);

export default router;
