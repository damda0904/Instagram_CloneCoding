import * as postRepository from '../data/post.js';
import * as commentRepository from '../data/comment.js';

//댓글 가져오기
export async function getComments(req, res) {
    const parentId = req.params.parentId;

    const comments = await commentRepository.getComments(parentId);

    console.log("comments: " + comments);

    res.status(200).json(comments);
}

//댓글 추가
export async function createComment(req, res) {
    const postId = req.params.postId;
    const userDBId = req.userDBId;
    const text = req.body.text;

    const commentId = await commentRepository.createComment(postId, text, userDBId);

    console.log(commentId)

    postRepository.updateComment(postId, commentId);

    res.status(201).json(commentId)
}

//대댓글 추가
export async function createChild(req, res) {
    const id = req.params.id;
    const userDBId = req.userDBId;
    const text = req.body.text;

    const commentId = await commentRepository.createChild(id, text, userDBId);

    console.log("commentId: " + commentId)

    const parent = await commentRepository.updateChild(id, commentId);

    console.log("parent: " + parent)

    res.status(201).json(commentId)

}

//댓글 삭제
export async function deleteComment(req, res) {
    const id = req.params.id;
    const userDBId = req.userDBId;

    const parent = await commentRepository.deleteComment(id, userDBId)

    if (parent.parent == "post") {
        const post = await postRepository.deleteComment(postId, id);

        res.status(200).json(post);
    }
    else if (parent.parent == "comment") {
        const comment = await commentRepository.deleteChild(id);

        res.status(201).json(comment);
    }
}

//댓글 좋아요 추가
export async function likeComment(req, res) {
    const id = req.params.id;
    const userDBId = req.userDBId;

    const comment = await commentRepository.likeComment(id, userDBId);

    if (!comment) {
        res.status(400).json({ message: "you cannot like your comment" })
    }

    res.status(201).json(comment);
}

//댓글 좋아요 취소
export async function unlikeComment(req, res) {
    const id = req.params.id;

    const comment = await commentRepository.unlikeComment(id);

    res.status(201).json(comment)
}

