const bcrypt = require('bcryptjs')
const User = require("../models/User")
const jwt = require("jsonwebtoken")
const { token } = require('morgan')

exports.registerUser = async (req, res) => {
        try {
                // Check User
                const { username, password } = req.body
                var user = await User.findOne({username})
                console.log(user)
                if(user) {
                        return res.status(400).send('User Already Exists')
                } 
                const salt = await bcrypt.genSalt(10)
                user = new User({
                        username,
                        password,
                });
                //Encrypt
                user.password = await bcrypt.hash(password, salt);
                await user.save();
                res.send("Register Success");

        } catch (err) {
                console.log(err)
                res.status(500).send("ServerError")
        }
}

exports.editUser = async (req, res) => {
        try {
                res.send("Edit User")
        } catch (err) {
                console.log(err)
                res.status(500).send("ServerError")
        }
}

exports.deleteUser = async (req, res) => {
        try {
                res.send("Delete User")
        } catch (err) {
                console.log(err)
                res.status(500).send("ServerError")
        }
}

exports.listUser = async (req, res) => {
        try {
                res.send("List User")
        } catch (err) {
                console.log(err)
                res.status(500).send("ServerError")
        }
}

exports.loginUser = async (req, res) => {
        try {
                const {username, password} = req.body;
                var user = await User.findOneAndUpdate({username}, {new: true});
                if(user) {
                        // Check Password
                        const isMatch = await bcrypt.compare(password, user.password);
                        if (!isMatch) {
                                return res.status(400).send("Password Invalid")
                        }
                        // Payload
                        const payload = {
                                user: {
                                        username: user.username,
                                        role: user.role
                                }
                        }
                        // Generate Token
                        jwt.sign(payload, 'jwtSecret', {expiresIn: 3600}, (err, token) => {
                                if (err) throw err;
                                res.json({token, payload}); 
                        } );

                }
                else {
                        return res.status(400).send("UserNotFond");
                }
        } catch (err) {
                console.log(err)
                res.status(500).send("ServerError")
        }
}