//Authenticate users login
const withAuth = async (req, res, next) => {
    if (!req.session.logged_in) {
        //Redirect to login if not logged in
        res.redirect('/login')
    } else {
        next();
    }
};

module.exports = withAuth