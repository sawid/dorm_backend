const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan');
require('dotenv').config();
const { readdirSync } = require('fs')
const connectDB = require('./config/db');
const { lineSent } = require('./controllers/linebot');

const app = express()

connectDB()

app.use(morgan('dev'))
app.use(bodyParser.json({limit:'20mb'}))
app.use(cors())


// Route
// app.use('/api', require('./routes/api'))

readdirSync('./routes').map((r)=> app.use('/api', require('./routes/' + r)))

app.get("/", (req, res) => {
  res.send('สวัสดี express')
      })

app.post("/webhook", lineSent)



const port = process.env.PORT
app.listen(port, ()=>{
        console.log('Server listening port ' + port)
})