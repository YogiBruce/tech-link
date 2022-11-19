const router = require('express').Router();
const passport = require('passport');
const { User } = require('../../models/index');

//return the login page
router.get('/login', (req, res) => {
    res.render('login');
});

//use passport.js as middleware to check authentication
router.post('/login/password', passport.authenticate('local', {
    successReturnToOrRedirect: '/user/dashboard',
    failureRedirect: '/user/login',
}));

//return signup page
router.get('/register', (req, res) => {
    res.render('register');
});

//new user is logged in
router.post('/register', async (req, res, next) => {
    try {
        const newUserData = await User.create(req.body);
        const newUser = newUserData.get({ plain: true });
        req.login(newUser, err => {
            if (err) { return next(err) }
            res.redirect('/user/dashboard');
        });
    }
    catch (err) {
        res.status(400).send(err.errors.map(e => e.message))
    }
});

//End session and return to login
router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err) }
        req.session.destroy();
        res.redirect('/user/login');
    });
});

module.exports = router;