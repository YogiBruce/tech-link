//Authenticate users login
const withAuth = async (req, res, next) => {
    if (!req.session.withAuth()) {
        res.redirect('/login')
    } else {
        next();
    }
};

module.exports = withAuth