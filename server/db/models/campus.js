const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  description: Sequelize.TEXT
});
