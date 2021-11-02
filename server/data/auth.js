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

export async function findByName(name) {
    return User.find({ name }, 'name username profile');
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


export async function follow(userDBId, followUser) {

    return User.findById(followUser)
        .then(user => {
            if (!user) {
                return false
            }
            else if (user.follower.includes(userDBId)) {
                return false
            }

            let follower = user.follower ? user.follower : [];
            follower.push(userDBId)

            return User.findByIdAndUpdate(followUser, { follower: follower })
                .then(() => {
                    return User.findById(userDBId)
                        .then(user => {
                            if (user.following.includes(followUser)) { return false }
                            let following = user.following ? user.following : [];
                            following.push(followUser)

                            return User.findByIdAndUpdate(userDBId, { following: following })
                        })
                })


        })

}

export async function unfollow(userDBId, followUser) {
    return User.findById(followUser)
        .then(user => {

            console.log("user.follower: " + user.follower + ", " + user.follower.includes(userDBId))
            if (!user) { return false }
            else if (!user.follower.includes(userDBId)) { return false }


            let follower = user.follower;

            for (let i = 0; i < follower.length; i++) {
                if (follower[i] === userDBId) {
                    follower.splice(i, 1)
                    break;
                }
            }

            console.log("follower: " + follower)

            return User.findByIdAndUpdate(followUser, { follower: follower })
                .then(() => {
                    return User.findById(userDBId)
                        .then(user => {
                            let following = user.following ? user.following : [];

                            for (let i = 0; i < following.length; i++) {
                                if (following[i] === followUser) {
                                    following.splice(i, 1)
                                    break;
                                }
                            }

                            console.log("following: " + following)

                            return User.findByIdAndUpdate(userDBId, { following: following })
                        })
                })


        })

}