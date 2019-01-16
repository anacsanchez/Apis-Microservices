const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser')
const PORT = 8080;
const morgan = require('morgan');
const router = require("./api")
module.exports = app;

app.use(morgan('dev'))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: "true"}))
app.use('/api', router)

app.use(express.static(path.join(__dirname, '..')))

app.get('*', (req,res,next) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.set('trust proxy', true)

app.listen(PORT, () => 'Listening on port' + PORT)
