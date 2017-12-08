const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL(2, 1),
    isDecimal: true,
    max: 4.0,
    min: 0.0
  }
});
