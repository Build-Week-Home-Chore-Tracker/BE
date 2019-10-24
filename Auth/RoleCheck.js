module.exports = (role) => {
    return (req, res, next) => {
        console.log(role, req.user.role);
        if (role === req.user.role) {
            next();
        } else {
            res.status(403).json({ message: 'need to have proper role for access' });
        }
    };
};