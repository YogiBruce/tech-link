const router = require('express').Router();
const withAuth = require('../../util/auth');
const { Post } = require('../../models');
const sequelize = require('../../config/connection');

//Create new post
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        });
        res.json(newPost);
    }
    catch (err) {res.status(500).json(err)}
});

//Updating posts
router.put('/:id', withAuth, async (req, res) => {
   try{
    const updatePost = await Post.update(req.body, {
        where: {
            id: req.params.id,
        },
    });

    if (updatePost) {
        res.status(200).json(updatePost)
    } else {
        res.status(404).json({message: 'No post found'})
    }
   }
   catch (err) {
    res.status(500).json(err)
   }
});


//Delete posts
router.delete('/:id', withAuth, async (req, res) => {
    try{
        const deletePost = Post.destroy({
            where: {
                id: req.params.id,
            }
        });

        if (deletePost) {
            res.status(200).json(deletePost)
        } else {
            res.status(404).json({message: 'No post found'})
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.export = router;