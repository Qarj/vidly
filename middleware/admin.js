
module.exports = function (req, res, next) {
    // 401 Unauthorised
    // 403 Forbidden

    if (!req.user.isAdmin) return res.status(403).send('Insufficient rights.');

    next();
}