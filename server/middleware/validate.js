import { body, validationResult, } from 'express-validator';

export const validate = (req, res, next) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) { return next() }

    return res.status(400).json({ message: errors.array() })
}

export const checkSignupId = (value) => {
    var patternPhone = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/
    var patternEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/

    if (!patternPhone.test(value) || !patternEmail.test(value)) {
        return false;
    }
    else { return true; }
}