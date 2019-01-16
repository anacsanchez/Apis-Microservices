const router = require("express").Router();
module.exports = router;

router.get('/', (req,res) => {
  console.log(req.connection.remoteAddress)
})
