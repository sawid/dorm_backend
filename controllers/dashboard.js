const bcrypt = require('bcryptjs')
const Annoucement = require("../models/Annoucement")
const jwt = require("jsonwebtoken")
const { token } = require('morgan')

exports.listAnnoucement = async(req, res) => {
        try {
            const annoucement = await Annoucement.find({}).exec();
            res.send(annoucement)
    
        } catch (err) {
            console.log(err);
            res.status(500).send("ServerError")
        }
    }