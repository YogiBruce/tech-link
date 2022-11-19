const router = require('express').Router();
const isAuthenticated = require('../../utils/auth');
const { Comment } = require('../../models/index');

router.post('/:id', isAuthenticated, async (rec, res) => {
    const user_id = req.user.id;
    const post_id = req.params.id;
    const { content } = req.body;
    try {
        await Comment.create({
            content,
            user_id,
            post_id
        });
        res.status(201).redirect('/api/post/${post_id}');
    }
    catch (err) { res.status(400).send('Failed to create new comment'); }
});

module.exports = router;