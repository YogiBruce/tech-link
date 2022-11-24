const router = require('express').Router();
const isAuthenticated = require('../../utils/auth');
const { Post, User } = require('../../models/index');

//show user posts when logged in
router.get('/', isAuthenticated, async (req, res) => {
    try {
        const postData = await Post.findAll(
            {
                where: { user_id: req.user.id },
                include: [
                    {
                        model: User,
                        attribute:
                    }
                ]
            });
    }
    catch (err) {
        res.status(400).send(err.errors.map(e => e.message));
    }
});

module.exports = router;