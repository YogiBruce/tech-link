//Authenticate users login
const withAuth = async (req, res, next) => {
    if (!req.session.sessionwithAuth()) {
        res.redirect('/login')
    } else {
        next();
    }
};

module.exports = withAuth