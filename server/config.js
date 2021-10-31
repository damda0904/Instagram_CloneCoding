import dotenv from 'dotenv';
dotenv.config();

//환경변수 유무를 체크하는 함수
function required(key, defaultValue = undefined) {
    const value = process.env[key] || defaultValue;
    if (value == null) {
        throw new Error(`Key ${key} is undefined`)
    }
    return value;
}

export const config = {
    host: {
        port: parseInt(required('HOST_PORT', 8080))
    },
    jwt: {
        secretKey: required('JWT_SECRET'),
        expiresInDays: required('JWT_EXPIRES_SEC', 86400)
    },
    bcrypt: {
        saltRounds: parseInt(required('BCRYPT_SALT_ROUNDS', 12))
    },
    db: {
        host: required('DB_HOST')
    }
}