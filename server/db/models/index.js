const URL = require('./url');
const User = require('./user');
const Exercise = require('./exercise');

User.hasMany(Exercise, {as: 'Exercises'})

module.exports = {
  URL,
  User,
  Exercise
}
