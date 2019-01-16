const router = require("express").Router();
module.exports = router;

router.use('/timestamp', require('./timestamp.js'))
router.use('/whoami', require('./whoami.js'))
