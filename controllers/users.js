const bcrypt = require('bcryptjs')
const User = require("../models/User")
const jwt = require("jsonwebtoken")
const { token } = require('morgan')

exports.listUsers = async (req, res) => {
        try {
                const user = await User.find({}).select('-password').exec();
                res.send(user)
                
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.readUsers = async (req, res) => {
        try {
                const id = req.params.id
                const user = await User.findOne({ _id:id }).select('-password').exec();
                res.send(user)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.updateUsers = async (req, res) => {
        try {
                var { id, password } = req.body.values
                // Generate Salt
                const salt = await bcrypt.genSalt(10)
                // Encrypt
                const enPassword = await bcrypt.hash(password, salt);
                const user = await User.findOneAndUpdate({ _id:id }, { password: enPassword})
                res.send(user)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.removeUsers = async (req, res) => {
        try {
                const id = req.params.id
                const user = await User.findOneAndDelete({_id:id}).exec();
                res.send(user)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.changeStatus = async (req, res) => {
        try {
                
                const user = await User.findOneAndUpdate({ _id:req.body.id }, { enabled: req.body.enabled})
                res.send(user)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.changeRole = async (req, res) => {
        try {
                
                const user = await User.findOneAndUpdate({ _id:req.body.id }, { role: req.body.role})
                res.send(user)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.changeFirstname = async (req, res) => {
        try {
                console.log("changeFirstname")
                console.log(req.body.profile)
                const id = req.params.id
                const user = await User.findOneAndUpdate({ _id:id }, { firstname: req.body.profile.firstname })
                res.send(user)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.changeLastname = async (req, res) => {
        try {
                console.log("changeLastname")
                console.log(req.body.profile)
                const id = req.params.id
                const user = await User.findOneAndUpdate({ _id:id }, { lastname: req.body.profile.lastname })
                res.send(user)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.changeTelnumber = async (req, res) => {
        try {
                console.log("changeTelnumber")
                console.log(req.body.profile)
                const id = req.params.id
                const user = await User.findOneAndUpdate({ _id:id }, { telnumber: req.body.profile.telnum })
                res.send(user)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.changeEmail = async (req, res) => {
        try {
                console.log("changeEmail")
                console.log(req.body.profile)
                const id = req.params.id
                const user = await User.findOneAndUpdate({ _id:id }, { Email: req.body.profile.email })
                res.send(user)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.changeCellnumber= async (req, res) => {
        try {
                console.log("changeCellnumber")
                console.log(req.body.profile)
                const id = req.params.id
                const user = await User.findOneAndUpdate({ _id:id }, { cellnumber: req.body.profile.cellnum })
                res.send(user)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}