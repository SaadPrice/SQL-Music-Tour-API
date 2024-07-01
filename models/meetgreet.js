'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class MeetGreet extends Model {
    static associate(models) {
      // Define belongs-to association with Band model
      this.belongsTo(models.Band, { foreignKey: 'bandId', as: 'band' });

      // Define belongs-to association with Event model
      this.belongsTo(models.Event, { foreignKey: 'eventId', as: 'event' });
    }
  }

  MeetGreet.init(
    {
      // Define the columns of the MeetGreet model
      bandId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
      location: DataTypes.STRING,
      startTime: DataTypes.TIME,
      endTime: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: 'MeetGreet',
      timestamps: false, // Disable timestamps
    }
  );

  return MeetGreet;
};
