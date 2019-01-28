const router = require('express').Router();
module.exports = router;
const { User, Exercise } = require('../db/models');

router.get('/users', (req,res) => {
  User.all().then(users => res.send(users.map(user => ({username: user.username, _id: user.id }))))
})

router.get('/log?', (req,res) => {
  const data = req.url.slice(req.path.length + 1).split('&')
  res.end();
})

router.post('/new-user', (req,res) => {
  if(req.body.username) {
    User.create({username: req.body.username})
    .then(user => res.send({username: user.username, _id: user.id }))
    .catch(err => console.log(err))
  }
  else {
    res.end();
  }
})

router.post('/add', (req,res) => {
  if (req.body.username) {

  }
})
