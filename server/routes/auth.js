const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');

// REGISTER
router.post("/register", async(req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        // encrypt the password
        password: CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.SECRET_KEY
        ).toString(),
    });
    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch(err) {
        // server error
        res.status(500).json(err);
    }
});

module.exports = router;