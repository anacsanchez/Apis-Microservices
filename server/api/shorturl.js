const router = require('express').Router()
const { URL } = require('../db/models')
module.exports = router;

router.get('/:id', (req,res) => {
  URL.findById(req.params.id)
  .then(foundUrl => res.redirect(foundUrl.original))
  .catch(() => res.send("short url does not exist"))
})

router.post('/new', (req,res) => {
  if (req.body.url) {
    URL.create({ original: req.body.url })
    .then(newUrl => res.send({"original_url": newUrl.original, "short_url": newUrl.id }))
    .catch(err => console.log(err))
  }
  else {
    res.end()
  }
})
