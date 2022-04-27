const bcrypt = require('bcryptjs')
const Renter = require("../models/Renter")
const jwt = require("jsonwebtoken")
const { token } = require('morgan')

exports.createRenter = async (req, res) => {
        try {
                const { renterName } = req.body
                var renter = await Renter.findOne({renterName})
                console.log(renter)
                if(renter) {
                        return res.status(400).send('Renter Already Exists')
                } 
                renter = new Renter({
                        renterName,
                })
                await renter.save();
                res.send("Create Renter Success");
                
        } catch (err) {
                console.log(err)
                res.status(500).send("ServerError")
        }
}

exports.listRenter = async (req, res) => {
        try {
                const renter = await Renter.find({}).exec();
                res.send(renter)
                
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.readRenter = async (req, res) => {
        try {
                const id = req.params.id
                const renter = await Renter.findOne({ _id:id }).exec();
                res.send(renter)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.removeRenter = async (req, res) => {
        try {
                const id = req.params.id
                const renter = await Renter.findOneAndDelete({_id:id}).exec();
                res.send(renter)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.updateRenter = async(req, res) => {
        try{
           const id = req.params.id
           var { renterName } = req.body.dataRenter
           console.log(renterName)
           const renter = await Renter.findOneAndUpdate({ _id:id }, { renterName:renterName }).exec();
           res.send(renter)

        }catch(err){
           console.log(err);
           res.status(500).send("Sever Error!")
        }

} 