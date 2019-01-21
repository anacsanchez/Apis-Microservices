const Sequelize = require('sequelize')
const db = require('../db')

const URL = db.define('url', {
  original: { type: Sequelize.STRING, allowNull: false }
})

module.exports = URL;
