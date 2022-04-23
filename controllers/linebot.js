const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const { token } = require('morgan')
const Problem = require("../models/Problem")
const Renter = require("../models/Renter")
const line = require('@line/bot-sdk');
const client = new line.Client({
        channelAccessToken: process.env.CHANNELTOKEN
      });

exports.lineSent = async (req, res) => {
        try {
                console.log('req.body =>', JSON.stringify(req.body,null,2)) //สิ่งที่ Line ส่งมา
                var text = (req.body.events[0].message.text)
                var id = (req.body.events[0].source.userId)
                console.log(text)
                console.log(id)
                if(text.charAt(0) === "R") {
                        console.log("Register")
                        var nameId = text.substring(2);
                        console.log(nameId)
                        var renter = await Renter.findOneAndUpdate({renterName:nameId}, {lineId:id}).exec();
                        console.log("Add Success")
                        res.send(renter)
                }
                else if(text.charAt(0) === "P") {
                        console.log("Report")
                        var dataReport = text.split(" ");
                        console.log(dataReport)
                        var roomName = dataReport[1]
                        var detailProblem = dataReport[2]
                        var problem = new Problem({
                                roomName,
                                detailProblem,
                        })
                        await problem.save();
                        console.log("Create Problem Sucess")
                        res.send("Create Problem Sucess")
                }
                res.send("HTTP POST request sent to the webhook URL!")
                
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}

exports.lineSentMsg = async (req, res) => {
        try {
                const message = {
                        type: 'text',
                        text: 'Klaco'
                      };
                client.pushMessage('U1cec79b3a5d9bfda564b68cbf73f1f1b', message)                      
                console.log('req.body =>', JSON.stringify(req.body,null,2)) //สิ่งที่ Line ส่งมา
                res.send("HTTP POST request sent to the webhook URL!")
                
        } catch (err) {
                console.log(err);
                res.status(500).send("ServerError")
        }
}