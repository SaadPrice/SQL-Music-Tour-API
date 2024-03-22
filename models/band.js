// band.js
'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Band extends Model {
    static associate(models) {
      // Define one-to-many association with SetTime model
      this.hasMany(models.SetTime, {
        foreignKey: 'bandId', // Foreign key in the SetTime model that points to Band
        as: 'setTimes', // Alias for the associated SetTime model
      });
    }
  }

  Band.init(
    {
      // Define the columns of the Band model
      name: DataTypes.STRING,
      genre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Band',
      timestamps: false, // Add this line to disable timestamps
    }
  );

  return Band;
};
