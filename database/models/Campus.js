/*==================================================
/database/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, 
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg',
    validate: {
      notEmpty:true,
    }
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty:true,
    }
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  }
});

// Export the campus model
module.exports = Campus;