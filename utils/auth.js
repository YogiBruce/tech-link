//Authenticate users login
const isAuthenticated = async (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/user/login')
    }
};

module.exports = isAuthenticated