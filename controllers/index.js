//Supporting files
const router = require('express').Router();
const homeRouter = require ('./homeRouter');
const userRouter = require('./user');
const apiRouter = require('./api');

//Path for routes
router.use('/', homeRouter);
router.use('/', apiRouter);
router.use ('/user', userRouter);

//Default for unspecifiec route
router.use((req, res) => {
    res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;