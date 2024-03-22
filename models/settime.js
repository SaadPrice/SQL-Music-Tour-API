// setTime.js
'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class SetTime extends Model {
    static associate(models) {
      // Define belongs-to association with Event model
      this.belongsTo(models.Event, { foreignKey: 'eventId', as: 'event' });
    }
  }

  SetTime.init(
    {
      // Define the columns of the SetTime model
      eventId: DataTypes.INTEGER,
      startTime: DataTypes.TIME,
      endTime: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: 'SetTime',
      timestamps: false, // Add this line to disable timestamps
    }
  );

  return SetTime;
};

