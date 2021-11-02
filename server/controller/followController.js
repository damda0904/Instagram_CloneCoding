import * as userRepository from '../data/auth.js';

export async function follow(req, res) {
    const userDBId = req.userDBId;
    const followUser = req.params.user;

    if (userDBId === followUser) { res.status(400).json({ message: "you cannot follow yourself" }) }
    else {
        const user = await userRepository.follow(userDBId, followUser)

        if (!user) {
            res.status(404).json({ message: "followUser not found or already following" })
        }
        else {
            res.status(200).json(user);
        }

    }
}

export async function unfollow(req, res) {
    const userDBId = req.userDBId;
    const followUser = req.params.user;

    console.log("followUser: " + followUser)

    if (userDBId === followUser) { res.status(400).json({ message: "you cannot unfollow yourself" }) }
    else {
        const user = await userRepository.unfollow(userDBId, followUser)

        if (!user) {
            res.status(400).json({ message: "you cannot unfollow person not following" })
        }
        else {
            res.status(200).json(user);
        }
    }

}