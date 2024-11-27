const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                status: "Failed",
                message: "Access denied for user",
                isSuccess: false,
                data: null,
            });
        }
        next();
    };
};

module.exports = authorizeRoles;