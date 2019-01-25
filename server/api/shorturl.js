const router = require('express').Router()
const { URL } = require('../db/models')
module.exports = router;
const dns = require('dns');

router.get('/:id', (req,res) => {
  URL.findById(req.params.id)
  .then(foundUrl => res.redirect(foundUrl.original))
  .catch(() => res.send("short url does not exist"))
})

router.post('/new', (req,res) => {
  if (req.body.url) {
    dns.lookup(req.body.url.replace(/(http:\/\/)|(https:\/\/)/, ""), (err, address) => {
      if (err) {
        console.log("error", err, "address", address)
        res.end()
      }
      else {
        URL.create({ original: req.body.url })
        .then(newUrl => res.send({"original_url": newUrl.original, "short_url": newUrl.id }))
        .catch(error => console.log(error))
      }
    })
  }
})
