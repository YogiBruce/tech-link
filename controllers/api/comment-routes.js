const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            content: req.body.content,
            user_id: req.body.user_id,
            post_id: req.body.post_id
        });
        res.status(newComment);
    }
    catch (err) { res.status(400).send('Failed to create new comment'); }
});

module.exports = router;