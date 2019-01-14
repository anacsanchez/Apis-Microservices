const express = require('express')
const router = express.Router();
module.exports = router;

router.get("/timestamp/:date_string", (req,res) => {
  const dateString = req.params.date_string;
  let date;
  if (parseInt(dateString).toString().length == dateString.length) {
    date = new Date(parseInt(dateString));
  }
  else {
    date = new Date(dateString)
  }
  if (date == 'Invalid Date') {
    res.json({"error": "Invalid Date" })
  }
  else {
    res.json({"unix": date.getTime(), "utc": date.toUTCString()})
  }
})

router.get("/timestamp", (req,res) => {
  let date = new Date();
  res.json({"unix": date.getTime(), "utc": date.toUTCString()})
})
