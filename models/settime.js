'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class SetTime extends Model {
    static associate(models) {
      // Define belongs-to association with Event model
      this.belongsTo(models.Event, { foreignKey: 'eventId', as: 'event' });
      // Define belongs-to association with Band model
      this.belongsTo(models.Band, { foreignKey: 'bandId', as: 'band' });
    }
  }

  SetTime.init(
    {
      // Define the columns of the SetTime model
      eventId: DataTypes.INTEGER,
      bandId: DataTypes.INTEGER,
      startTime: DataTypes.TIME,
      endTime: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: 'SetTime',
      timestamps: false, // Disable timestamps
    }
  );

  return SetTime;
};
