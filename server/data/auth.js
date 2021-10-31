import mongoose from 'mongoose';
import { useVirtualId } from '../db/database.js';

const schema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    profile: { width: Number, height: Number },
    follower: [String],
    following: [String]
})

useVirtualId(schema)
const User = mongoose.model('User', schema);



export async function findById(id) {
    return User.findById(id)
        .then(data => {
            console.log(data);
            return data
        })
}

export async function findByUserId(userId) {
    return User.findOne({ userId })
}

export async function findByUsername(username) {
    return User.findOne({ username })
}

export async function createUser(user) {
    return new User(user).save().then(data => {
        console.log(data)
        return data.id;
    })
}

export async function findFollowing(id) {
    return User.findById(id);
}
