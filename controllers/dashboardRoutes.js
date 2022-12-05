const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models/');

//Show all posts when logged in
router.get('/', withAuth, async (req, res) => {
    try {
        console.log('in try')
        const postData = await Post.findAll(
            {
                where: { 
                    user_id: req.session.user_id 
                },
                include: [
                    {
                        model: Comment,
                        include: {
                            model: User,
                            attributes: ['username']
                        }
                    },
                    {
                        model: User,
                        attributes: ['username']
                    }
                ]
            });
            
            //Serialize data for the template
            const posts = postData.map((post) => post.get({ plain: true }));
            console.log(posts);

            // Pass serialized data and session flag into template
            res.render('dashboard', {
                posts,
                logged_in: req.session.logged_in
            })
    }
    catch (err) {
        res.redirect('/');
    }
});

//Get route for new post
router.get('/new', (req, res) => {
    res.render('new-post', {
        logged_in: req.session.logged_in
    })
});

//Get route for edit post
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if (postData) {
            const post = postData.get({ plain: true });
            res.render('edit-post', { post, logged_in: req.session.logged_in });
        } else {
            res.status(400).end()
        }
    } catch (err) {
        res.redirect('login')
    }
});

module.exports = router;