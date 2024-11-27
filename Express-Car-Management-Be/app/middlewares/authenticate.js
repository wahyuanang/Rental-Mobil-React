const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            status: "Failed",
            message: "You're not authorized",
            isSuccess: false,
            data: null,
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json({
                status: "Failed",
                message: "Invalid Token",
                isSuccess: false,
                data: null,
            });
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;

