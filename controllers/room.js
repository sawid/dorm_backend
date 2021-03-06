const bcrypt = require('bcryptjs')
const Room = require("../models/Room")

const jwt = require("jsonwebtoken")
const { token } = require('morgan')
const Bill = require('../models/Bill')
const Problem = require('../models/Problem')

exports.createRoom = async (req, res) => {
        try {
                const { roomName } = req.body
                var room = await Room.findOne({roomName})
                console.log(room)
                if(room) {
                        return res.status(400).send('Room Already Exists')
                } 
                room = new Room({
                        roomName,
                })
                await room.save();
                res.send("Create Room Success");
                
        } catch (err) {
                console.log(err)
                res.status(500).send("ServerError")
        }
}

exports.listRoom = async (req, res) => {
        try {
                const room = await Room.find({}).exec();
                res.send(room)
                
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.readRoom = async (req, res) => {
        try {
                const id = req.params.id
                const room = await Room.findOne({ _id:id }).exec();
                res.send(room)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.updateRoom = async(req, res) => {
        try{
           const id = req.params.id
           var { amountBed , rentalFee,room_type ,renterId} = req.body.dataRoom
           console.log(renterId)
           const room = await Room.findOneAndUpdate({ _id:id }, { amountBed: amountBed , rentalFee : rentalFee ,room_type : room_type ,renterId : renterId}).exec();
           res.send(room)

        }catch(err){
           console.log(err);
           res.status(500).send("Sever Error!")
        }

} 

exports.removeRoom = async (req, res) => {
        try {
                const id = req.params.id
                const room = await Room.findOneAndDelete({_id:id}).exec();
                res.send(room)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.updateFile = async (req, res) => {
        try {
                const id = req.params.id
                const room = await Room.findOneAndDelete({_id:id}).exec();
                res.send(room)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.getRoomName = async (req, res) => {
        try {
                const id = req.params.id
                console.log(id)
                const bill = await Bill.findOne({_id:id}).exec();
                console.log(bill)
                const room = await Room.findOne({_id:bill.roomId}).exec();
                res.send(room.roomName)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.getProblem = async (req, res) => {
        try {
                const id = req.params.id
                const room = await Room.findOne({ _id:id }).exec();
                console.log(room.roomName)
                const problem = await Problem.find({ roomName:room.roomName }).exec();

                res.send(problem)
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}


// Not Use 
/*
exports.updateRoomNameRenter = async(req, res) => {
        try{
           const id = req.params.id
           var { name } = req.body.dataRoom
           console.log(name)
           const room = await Room.findOneAndUpdate({ _id:id }, { name : name}).exec();
           res.send(room)

        }catch(err){
           console.log(err);
           res.status(500).send("Sever Error!")
        }

} 

exports.updateRentelFee = async(req, res) => {
        try{
           const id = req.params.id
           var { rentalFee } = req.body.dataRoom
           console.log(rentalFee)
           const room_fee = await Room.findOneAndUpdate({ _id:id }, { rentalFee : rentalFee}).exec();
           res.send(room_fee)

        }catch(err){
           console.log(err);
           res.status(500).send("Sever Error!")
        }

} 

exports.updateRoomType = async(req, res) => {
        try{
           const id = req.params.id
           var {room_type } = req.body.dataRoom
           console.log(room_type)
           const type_room = await Room.findOneAndUpdate({ _id:id }, { room_type : room_type}).exec();
           res.send( type_room)

        }catch(err){
           console.log(err);
           res.status(500).send("Sever Error!")
        }

} 

exports.updatePhoneNumber = async(req, res) => {
        try{
           const id = req.params.id
           var { phoneNumber } = req.body.dataRoom
           console.log(amountBed)
           const room = await Room.findOneAndUpdate({ _id:id }, {  phoneNumber : phoneNumber  }).exec();
           res.send(room)

        }catch(err){
           console.log(err);
           res.status(500).send("Sever Error!")
        }

} */