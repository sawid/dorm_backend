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
                
                res.send("UpdateUser")
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