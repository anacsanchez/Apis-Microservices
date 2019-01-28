const Sequelize = require('sequelize');
const db = require('../db');

const Exercise = db.define('exercise', {
  description: Sequelize.TEXT,
  duration: Sequelize.FLOAT,
  date: { type: Sequelize.DATEONLY, defaultValue: Sequelize.NOW }
})

module.exports = Exercise;
