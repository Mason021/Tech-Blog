// verifies user loggied in before the restricted route access is given
const withAuth = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect("/login");
    } else {
        next();
    }
};

module.exports = withAuth;