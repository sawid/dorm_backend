const bcrypt = require('bcryptjs')
const Problem = require("../models/Problem")
const jwt = require("jsonwebtoken")
const { token } = require('morgan')


exports.listProblem = async (req, res) => {
    try {
            const problem = await Problem.find({}).exec();
            res.send(room)
            
    } catch (err) {
            console.log(err);
            res.status(500).send("ServerError")
    }
}

exports.readProblem = async (req, res) => {
    try {
            const id = req.params.id
            const problem = await Problem.findOne({ _id:id }).exec();
            res.send(room)
    } catch (err) {
            console.log(err);
            res.status(500).send("ServerError")
    }
}