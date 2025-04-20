const jwtUtils = require('../utils/jwtUtils');

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer token

    if (!token) {
        return res.status(403).json({ status: 403, message: 'Token required' });
    }

    // Verify the token
    const decoded = jwtUtils.verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ status: 403, message: 'Invalid or expired token' });
    }

    req.user = decoded; // Attach user info to request object
    next();
};

module.exports = authenticateToken;
