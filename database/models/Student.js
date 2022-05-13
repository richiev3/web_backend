/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const { type } = require('os');
const Sequelize = require('sequelize');  // Import Sequelize
const { default: isEmail } = require('validator/lib/isEmail');
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    }
  },
  
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:  'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg',
    validate: {
      notEmpty: true
    }
  },

  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      min:0.0,
      max: 4.0
    }
  }
});
  
// Export the student model
module.exports = Student;