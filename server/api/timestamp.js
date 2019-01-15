const router = require('express').Router();
module.exports = router;

router.get("/:date_string", (req,res) => {
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

router.get("/", (req,res) => {
  let date = new Date();
  res.json({"unix": date.getTime(), "utc": date.toUTCString()})
})
