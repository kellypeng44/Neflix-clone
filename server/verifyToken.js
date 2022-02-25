const jwt = require('jsonwebtoken');

function verify(req, res, next){
    // NOTE: headers not body!
    const authHeader = req.headers.token;
    if(authHeader){
        // header: Bearer <token>
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.SECRET_KEY, (err, userInfo) => {
            if(err) res.status(403).json("Token is not valid!");
            // assign new req.user if no error
            req.user = userInfo;
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated!");
    }
}

module.exports = verify;