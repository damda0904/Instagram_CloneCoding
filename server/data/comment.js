import mongoose from 'mongoose';
import { useVirtualId } from '../db/database.js'
import * as userRepository from './auth.js'
import * as postRepository from './post.js';

const schema = new mongoose.Schema({
    text: { type: String, required: true },
    like: { type: Number, required: true },
    userId: { type: String, required: true },
    username: { type: String, required: true },
    profile: { type: String, required: true },
    parentId: {
        id: { type: String, required: true },
        parent: { type: String, required: true },
    },
    childrenId: [String],
}, { timestamp: true })

useVirtualId(schema);
const Comment = mongoose.model('Comment', schema);

export async function createComment(postId, text, userDBId) {

    return userRepository.findById(userDBId)
        .then(user => {

            return new Comment({
                text,
                like: 0,
                userId: userDBId,
                username: user.username,
                profile: user.profile ? user.profile : null,
                parentId: { id: postId, parent: "post" },
            }).save()
                .then(comment => { return comment.id })
        })
}

export async function createChild(commentId, text, userDBId) {
    return userRepository.findById(userDBId)
        .then(user => {
            return new Comment({
                text,
                like: 0,
                userId: userDBId,
                username: user.username,
                profile: user.profile ? user.profile : null,
                parentId: { id: commentId, parent: "comment" }
            }).save()
                .then(comment => { return comment.id })
        })
}

export async function deleteComment(id, userDBId) {
    return userRepository.findById(userDBId)
        .then(user => {
            return Comment.findOne({ _id: id, username: user.username })
                .then(comment => {
                    Comment.findByIdAndDelete(id)
                    return comment.parentId;
                });
        })
}

export async function getComments(parentId) {

    return Comment.find({ 'parentId.id': parentId }).sort({ createdAt: -1 });

}

export async function likeComment(id, userDBId) {
    return Comment.findById(id)
        .then(comment => {
            if (comment.userId === userDBId) {
                return false;
            }
            const likes = parseInt(comment.like) + 1;

            return Comment.findByIdAndUpdate(id, { like: likes });
        })
}

export async function unlikeComment(id) {
    return Comment.findById(id)
        .then(comment => {
            const likes = parseInt(comment.like) - 1;

            return Comment.findByIdAndUpdate(id, { like: likes });
        })
}

export async function deleteChild(id) {
    return Comment.findById(id)
        .then(commnet => {
            let children = comment.childrenId;

            for (let i = 0; i < children.length; i++) {
                if (children[i] === id) {
                    children.splice(i, 1)
                    break;
                }
            }

            return Comment.findByIdAndUpdate(id, { childrenId: children });
        })
}

export async function updateChild(id, commentId) {
    return Comment.findById(id)
        .then(comment => {
            let children = comment.childrenId ? comment.childrenId : [];

            children.push(commentId);

            return Comment.findByIdAndUpdate(id, { childrenId: children })
        })
}