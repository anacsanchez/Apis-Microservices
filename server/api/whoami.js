const router = require("express").Router();
module.exports = router;

router.get('/', (req,res) => {
  res.json({"ipaddress": req.ip, "language":req.headers['accept-language'], "software":req.headers['user-agent']})
})
