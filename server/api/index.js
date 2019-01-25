const router = require("express").Router();
module.exports = router;

router.use('/timestamp', require('./timestamp.js'))
router.use('/whoami', require('./whoami.js'))
router.use('/shorturl', require('./shorturl.js'))
router.use('/exercise', require('./exercise.js'))
