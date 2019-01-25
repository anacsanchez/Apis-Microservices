const Sequelize = require('sequelize');
const db = require('../db');

const Exercise = db.define('exercise', {
  description: Sequelize.TEXT,
  duration: Sequelize.FLOAT,
  date: Sequelize.DATEONLY
})

module.exports = Exercise;
