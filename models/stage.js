'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Stage extends Model {
    static associate(models) {
      // Define has-many association with SetTime model
      this.hasMany(models.SetTime, {
        foreignKey: 'stageId', // Foreign key in the SetTime model that points to Stage
        as: 'setTimes', // Alias for the associated SetTime model
      });
    }
  }

  Stage.init(
    {
      // Define the columns of the Stage model
      name: {
        type: DataTypes.STRING,
        allowNull: false, // Name is required
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false, // Capacity is required
      },
    },
    {
      sequelize,
      modelName: 'Stage',
      timestamps: false, // Disable timestamps
    }
  );

  return Stage;
};
