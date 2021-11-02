import * as postRepository from '../data/post.js';

//게시글 생성
//TODO: 이미지, 영상 파일 저장 및 처리 필요
export async function createPost(req, res) {
    const { text, postImage, video, hashtag } = req.body;
    const userDBId = req.userDBId;


    const post = await postRepository.createPost({
        text,
        postImage,
        video,
        hashtag,
    }, userDBId)

    res.status(201).json(post)
}

//내 피드 가져오기
//TODO: 이미지, 영상 파일 전달 필요
export async function getPosts(req, res) {
    const { userDBId } = req.userDBId;

    const posts = await postRepository.getPosts(userDBId)
    if (!posts) {
        res.status(200).json({ message: 'posts is empty' })
    }
    res.status(200).json(posts);
}

//게시글 하나 가져오기
//TODO: 이미지, 영상파일 전달 필요
export async function getOnePost(req, res) {
    const id = req.params.id;

    const post = await postRepository.getOnePost(id);
    if (!post) {
        res.sendStatus(404)
    } else {
        res.status(200).json(post);
    }
}

//게시글 수정
//TODO: 이미지, 영상 파일 전달 필요
export async function updatePost(req, res) {
    const id = req.params.id;
    const text = req.body.text;
    const userDBId = req.userDBId;

    const post = await postRepository.updatePost(id, text, userDBId);
    if (!post) {
        res.status(403).json({ message: "you cannot update" })
    } else {
        res.status(201).json(post);
    }
}

//게시글 삭제
export async function deletePost(req, res) {
    const id = req.params.id;
    const userDBId = req.userDBId;

    await postRepository.deletePost(id, userDBId);

    res.sendStatus(204);
}

//좋아요 추가
export async function like(req, res) {
    const id = req.params.id;
    const userDBId = req.userDBId;

    const post = await postRepository.like(id, userDBId)
    if (!post) {
        res.status(403).json({ message: "cannot add like yourself" })
    } else if (post == "404") {
        res.status(404).json({ message: "post not founded" })
    }
    else {
        res.status(200).json(post)
    }
}

//좋아요 취소
export async function unlike(req, res) {
    const id = req.params.id;

    const post = await postRepository.unlike(id);
    if (!post) {
        res.status(400).json("cannot decrease from 0")
    }

    res.status(200).json(post);
}