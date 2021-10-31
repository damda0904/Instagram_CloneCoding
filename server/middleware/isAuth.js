import jwt from 'jsonwebtoken';
import * as userRepository from '../data/auth.js';
import { config } from '../config.js';

const AUTH_ERROR = { message: 'Authentication Error' }

export const isAuth = async (req, res, next) => {

    //Authorization 헤더 확인
    const authHeader = req.get('Authorization');
    if (!(authHeader && authHeader.startsWith('Bearer '))) {
        return res.status(401).json(AUTH_ERROR);
    }

    //토큰 확인
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        config.jwt.secretKey,
        async (error, decode) => {
            //jwt 토큰 에러 체크
            if (error) {
                console.log(error)
                return res.status(401).json(AUTH_ERROR);
            }

            //유저id 일치 확인
            const user = await userRepository.findById(decode.id);

            if (!user) {
                return res.status(401).json(AUTH_ERROR);
            }

            req.userDBId = user.id;   //req를 처리하기 전 req의 customData 설정 가능
            next();
        }
    )
}