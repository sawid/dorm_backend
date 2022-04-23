const bcrypt = require('bcryptjs')
const Room = require("../models/Room")
const jwt = require("jsonwebtoken")
const { token } = require('morgan')

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