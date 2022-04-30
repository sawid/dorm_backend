const bcrypt = require('bcryptjs')
const Bill = require("../models/Bill")
const Cost = require("../models/Cost")
const jwt = require("jsonwebtoken")
const { token } = require('morgan')
const Room = require('../models/Room')

exports.createBill = async(req, res) => {
    try {
        const { roomId, month, rentalFee } = req.body
        console.log(req.body)
        var bill = await Bill.findOne({ roomId: roomId, month: month, rentalFee: rentalFee })
        console.log(bill)
        if (bill) {
            return res.status(400).send('Bill Already Exists')
        }
        const room = await Room.findOne({ roomName: roomId }).exec();
        if(room) {
            console.log("room finded")
            console.log(room)
        }
        else {
            return res.status(400).send('Room Not Exists')
        }
        console.log(room.roomName)
        const roomIdDataBase = room._id
        console.log(roomIdDataBase)
        bill = new Bill({
            roomId: roomId,
            month: month,
            roomIdDataBase: roomIdDataBase,
            rentalFee: rentalFee,
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
        const bill = await Bill.findOne({ roomId: id, month: month }).exec();
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
        var { rentalFee, waterUnitLastMonth, waterUnitThisMonth, electricUnitLastMonth, electricUnitThisMonth, rentalNet } = req.body.dataBill
        const bill = await Bill.findOneAndUpdate({ _id: id }, {
            rentalFee: rentalFee,
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

exports.changePayStatus = async(req, res) => {
    try {

        const bill = await Bill.findOneAndUpdate({ _id: req.params.id }, { isPayed: req.body.isPayed }).exec();
        res.send(bill)
    } catch (err) {
        console.log(err);
        res.status(500).send("ServerError")
    }
}

exports.changeNotiStatus = async(req, res) => {
    try {

        const bill = await Bill.findOneAndUpdate({ _id: req.params.id }, { isBillNotified: req.body.isBillNotified }).exec();
        res.send(bill)
    } catch (err) {
        console.log(err);
        res.status(500).send("ServerError")
    }
}