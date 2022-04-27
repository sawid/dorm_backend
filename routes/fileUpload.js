const express = require("express");
const router = express.Router();
const multer = require("multer");
const Room = require("../models/Room");
var path = require('path');
const fs = require('fs')

const dataDate = new Date().toISOString().replace(/:/g, "-")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./file/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, dataDate + ".pdf");
  },
});

const upload = multer({ storage: storage });

router.get('/uploads/:id', async function(req, res) {
  const id = req.params.id
  const pathFile = await Room.findOne({ _id:id }).exec();
  const pathway = (__dirname + "/../file/uploads/" + pathFile.contactPath);
    if (fs.existsSync(pathway)) {
        res.contentType("application/pdf");
        fs.createReadStream(pathway).pipe(res)
    } else {
        res.status(500)
        console.log('File not found')
        res.send('File not found')
    }
})

router.post("/upload/:id", upload.single("file"), async function (req, res) {
  try {
    const id = req.params.id
    const room = await Room.findOneAndUpdate({ _id:id }, { contactPath: (dataDate + ".pdf") }).exec();
    res.send("Upload Success");
  } catch (err) {
    console.log(err);
    res.status(500).send("ServerError");
  }
});



module.exports = router;
