const router = require('express').Router();
module.exports = router;
const { User, Exercise } = require('../db/models');

router.get('/log?', (req,res) => {
  const data = req.url.slice(req.path.length + 1).split('&')
  res.end();
})

router.post('/new-user', (req,res) => {
  if(req.body.username) {
    User.create({username: req.body.username})
    .then(user => console.log(`${user.username} created successfully!`))
    .catch(err => console.log(err))
  }
  res.end();
})

router.post('/add', (req,res) => {

})
