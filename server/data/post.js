import mongoose from 'mongoose';
import * as userRepository from './auth.js';
import { useVirtualId } from '../db/database.js';

const schema = mongoose.Schema({
    text: { type: String, required: true },
    postImage: [String],
    video: [String],
    hashtag: [String],
    like: { type: Number, required: true },
    commentId: [String],
    userId: { type: String, required: true },
    username: { type: String, required: true },
    profile: String,

}, { timestamp: true })

useVirtualId(schema)
const Post = mongoose.model('Post', schema);


export async function createPost(post, id) {

    return userRepository.findById(id)
        .then((user) => {
            return new Post({
                ...post,
                like: 0,
                userId: id,
                username: user.username,
                profile: user.profile,
            }).save()
        })
}

export async function getPosts(id) {
    const followings = await userRepository.findFollowing(id);
    if (!followings) {
        return
    }

    console.log(followings)
    return Post.find({ username: followings }).sort({ createdAt: -1 })
}

export async function getOnePost(id) {
    return Post.findById(id);
}

export async function updatePost(id, text, userDBId) {
    return userRepository.findById(userDBId)
        .then((user) => {
            return Post.findOneAndUpdate({ _id: id, username: user.username }, { text }, { returnOriginal: false })
        })

}

export async function deletePost(id, userDBId) {

    return userRepository.findById(userDBId)
        .then((user) => {
            return Post.findOneAndDelete({ _id: id, username: user.username });
        })
}

export async function like(id, userDBId) {
    return Post.findById(id)
        .then(post => {
            if (!post) {
                return "404";
            }
            if (userDBId === post.userId) {
                return false;
            }

            const likes = parseInt(post.like) + 1;

            return Post.findByIdAndUpdate(id, { like: likes })
        })
}

export async function unlike(id) {
    return Post.findById(id)
        .then(post => {
            if (parseInt(post.like) == 0) {
                return false;
            }
            const likes = parseInt(post.like) - 1;

            return Post.findByIdAndUpdate(id, { like: likes })
        })
}


export async function updateComment(postId, commentId) {
    return Post.findById(postId)
        .then(post => {
            let comments = post.commentId ? post.commentId : [];
            comments.push(commentId);
            return Post.findByIdAndUpdate(postId, { commentId: comments })
        })
}

export async function deleteComment(postId, commentId) {
    return Post.findById(postId)
        .then(post => {
            let comments = post.commentId;

            for (let i = 0; i < comments.length; i++) {
                if (comments[i] === commentId) {
                    comments.splice(i, 1)
                    break;
                }
            }

            console.log(comments)

            return Post.findByIdAndUpdate(postId, { commentId: comments })
        })
}

