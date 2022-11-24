const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth')

//Get all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        //Serialize data for the template
        const posts = postData.map((post) => post.get({ plain: true }));

        //Pass serialized data and session to template
        res.render('homepage', { 
            posts,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});


//Use authentication to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try {
        //Find the logged in user based on session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

//Router to login
router.get('/login', (req, res) => {

    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});


module.exports = router
