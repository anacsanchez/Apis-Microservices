const router = require('express').Router();
module.exports = router;
const { User, Exercise } = require('../db/models');

router.get('/users', (req,res) => {
  User.all().then(users => res.send(users.map(user => ({username: user.username, _id: user.id }))))
  .catch(err => res.send(err))
})

router.post('/users', (req,res) => {
  if(req.body.username) {
    User.create({username: req.body.username})
    .then(user => res.send({username: user.username, _id: user.id }))
    .catch(err => res.send(err))
  }
  else {
    res.end();
  }
})

router.get('/users/:userId/exercises', (req,res) => {
  Exercise.findAll({ where: { user_id: req.params.userId}})
  .then(exercises => res.send(exercises))
  .catch(err => res.send(err))
})

router.post('/users/:userId/exercises', (req,res) => {
    User.findById(req.params.userId)
    .then(user => {
      Exercise.create({
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date || null
      })
      .then(exercise => user.add(exercise.id))
      .catch(err => res.send(err))
    })
    .catch(err => res.send(err))
})
