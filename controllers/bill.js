const bcrypt = require('bcryptjs')
const Bill = require("../models/Bill")
const Cost = require("../models/Cost")
const jwt = require("jsonwebtoken")
const { token } = require('morgan')

exports.createBill = async(req, res) => {
    try {
        const { roomId, month } = req.body
        var bill = await Bill.findOne({ roomId: roomId, month: month })
        console.log(bill)
        if (bill) {
            return res.status(400).send('Bill Already Exists')
        }
        bill = new Bill({
            roomId,
            month,
        })
        await bill.save();
        res.send("Bill Room Success");

    } catch (err) {
        console.log(err)
        res.status(500).send("ServerError")
    }
}

exports.listBill = async(req, res) => {
    try {
        const bill = await Bill.find({}).exec();
        res.send(bill)

    } catch (err) {
        console.log(err);
        res.status(500).send("ServerError")
    }
}

exports.readMonth = async(req, res) => {
    try {
        const id = req.params.id
        var { month } = req.body
        const bill = await Bill.findOne({roomId: id, month:month}).exec();
        res.send(bill)

    } catch (err) {
        console.log(err);
        res.status(500).send("ServerError")
    }
}

exports.readBill = async(req, res) => {
    try {
        const id = req.params.id
        const bill = await Bill.findOne({ _id: id }).exec();
        res.send(bill)
    } catch (err) {
        console.log(err);
        res.status(500).send("ServerError")
    }
}

exports.removeBill = async(req, res) => {
    try {
        const id = req.params.id
        const bill = await Bill.findOneAndDelete({ _id: id }).exec();
        res.send(bill)
    } catch (err) {
        console.log(err);
        res.status(500).send("ServerError")
    }
}

exports.createCost = async(req, res) => {
    try {
        const { waterPriceUnit, electricPriceUnit, commonFee } = req.body
        var cost = await Cost.findOne({ waterPriceUnit: waterPriceUnit, electricPriceUnit: electricPriceUnit, commonFee: commonFee })
        console.log(cost)
        if (cost) {
            return res.status(400).send('Cost Rate Already Exists')
        }
        cost = new Cost({
            waterPriceUnit,
            electricPriceUnit,
            commonFee,
        })
        await cost.save();
        res.send("Cost Rate Room Success");

    } catch (err) {
        console.log(err)
        res.status(500).send("ServerError")
    }
}

exports.listCost = async(req, res) => {
    try {
        const cost = await Cost.find({}).exec();
        res.send(cost)

    } catch (err) {
        console.log(err);
        res.status(500).send("ServerError")
    }
}

exports.updateBill = async(req, res) => {
    try {
        const id = req.params.id
        var { rentalFee, waterUnitLastMonth, waterUnitThisMonth,electricUnitLastMonth,electricUnitThisMonth,rentalNet } = req.body.dataBill
        const bill = await Bill.findOneAndUpdate({ _id: id }, {
            rentalFee: rentalFee ,
            waterUnitLastMonth: waterUnitLastMonth,
            waterUnitThisMonth: waterUnitThisMonth,
            electricUnitLastMonth: electricUnitLastMonth,
            electricUnitThisMonth: electricUnitThisMonth,
            rentalNet: rentalNet
        }).exec();
        res.send(bill)

    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error!")
    }

}