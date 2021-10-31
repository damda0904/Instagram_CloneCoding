import * as userRepository from '../data/auth.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config.js';


const jwtSecretKey = config.jwt.secretKey;
const jwtExpiresInDays = config.jwt.expiresInDays;
const bcryptSaltRounds = config.bcrypt.saltRounds;


function createJwtToken(id) {
    return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtExpiresInDays });
}


export async function signup(req, res) {
    const { userId, name, username, password, profileImg } = req.body;

    //id 중복 확인
    const foundId = await userRepository.findByUserId(userId);
    if (foundId) {
        return res.status(409).json({ message: `${userId} already exists` });
    }

    //username 중복 확인
    const foundUsername = await userRepository.findByUsername(username);
    if (foundUsername) {
        return res.status(409).json({ message: `${username} already exists` });
    }

    //패스워드 암호화
    //console.log(bcryptSaltRounds)
    const hashed = await bcrypt.hash(password, bcryptSaltRounds);

    //db에 저장 후 id 반환
    const id = await userRepository.createUser({
        userId,
        name,
        username,
        password: hashed,
        profileImg,
    })

    //id 대신 보내줄 토큰
    const token = createJwtToken(id);
    res.status(201).json({ token, username });

}

export async function login(req, res) {
    const { userId, password } = req.body;

    //userId 확인
    let user = await userRepository.findByUserId(userId);
    if (!user) {
        user = await userRepository.findByUsername(userId);
        if (!user) {
            return res.status(401)
                .json({ message: '아이디 혹은 비밀번호를 다시 확인해주세요' })
        }
    }

    //db에서 가져온 패스워드와 입력받은 패스워드 비교
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(401)
            .json({ message: '아이디 혹은 비밀번호를 다시 확인해주세요' })
    }

    //id 대신 보내줄 토큰
    const token = createJwtToken(user.id);
    res.status(201).json({ token, username: user.username });

}

export async function me(req, res) {

    const user = await userRepository.findById(req.userDBId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ token: req.token, username: user.username });

}



