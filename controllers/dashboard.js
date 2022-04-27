const bcrypt = require('bcryptjs')
const Annoucement = require("../models/Annoucement")
const Renter = require("../models/Renter")
const Problem = require("../models/Problem")
const Bill = require("../models/Bill")
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

exports.numberTopDashboard = async(req, res) => {
    try {
        const numberRenter = await Renter.countDocuments({}).exec();
        const numberProblem = await Problem.countDocuments({}).exec();
        const numberNotPay = await Bill.countDocuments({ isPayed: false }).exec();
        const numberTotal = await Bill.aggregate([
            {
              $group: {
                _id: 1,
                count: {
                  $sum: "$rentalNet"
                }
              }
            }
          ])
         

        var dataNumber = {
            numberRenter : numberRenter,
            numberProblem : numberProblem,
            numberNotPay : numberNotPay,
            numberTotal : numberTotal[0].count
        }

        res.send(dataNumber)

    } catch (err) {
        console.log(err);
        res.status(500).send("ServerError")
    }
}