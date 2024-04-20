const jwt = require('jsonwebtoken');
const env = require ('dotenv').config();

const jwtSign = (payload)=> {
    return jwt.sign(payload, JWT_SECRET,{
        expiresIn: '1d',
    })
};

const jwtVerfy = (token)=> {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return false;
    }
};

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        if (!token) 
        return res.status(401).json({message: "Authentication failed"});

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if (!decoded) 
        return res.status(401).json({message: "Authentication failed"});
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({message: "Authentication failed fully"});
    
    }
};

module.exports = { jwtSign, jwtVerfy, isAuthenticated };