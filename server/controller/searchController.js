import * as postRepository from '../data/post.js';

export async function search(req, res) {
    const keyword = req.query.keyword;

    const result = await postRepository.search(keyword);

    res.status(200).json(result)
}

export async function searchByHashtag(req, res) {
    const keyword = req.query.keyword;

    const result = await postRepository.searchByHashtag(keyword)

    res.status(200).json(result);
}