const router = require('express').Router();
module.exports = router;
const { User, Exercise } = require('../db/models');

router.get('/users', (req,res) => {
  User.all().then(users => res.send(users.map(user => ({username: user.username, _id: user.id }))))
  .catch(err => res.send(err))
})

router.get('/log?', (req,res) => {
  const data = req.url.slice(req.path.length + 1).split('&')
  res.end();
})

router.post('/new-user', (req,res) => {
  if(req.body.username) {
    User.create({username: req.body.username})
    .then(user => res.send({username: user.username, _id: user.id }))
    .catch(err => res.send(err))
  }
  else {
    res.end();
  }
})

router.post('/add', (req,res) => {
  // if (req.body.userId) {
    User.findById(req.body.userId)
    .then(user => {
      Exercise.create({
        user_id: user.id,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date || null
      })
      return user;
    })
    .then(user => user.reload())
    .then(user => res.send(user))
    .catch(err => res.send(err))
  // }
})
