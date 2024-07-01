'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Event extends Model {
    static associate(models) {
      // Define has-many association with MeetGreet model
      this.hasMany(models.MeetGreet, {
        foreignKey: 'eventId', // Foreign key in the MeetGreet model that points to Event
        as: 'meetGreets', // Alias for the associated MeetGreet model
      });

      // Define has-many association with SetTime model
      this.hasMany(models.SetTime, {
        foreignKey: 'eventId', // Foreign key in the SetTime model that points to Event
        as: 'setTimes', // Alias for the associated SetTime model
      });
    }
  }

  Event.init(
    {
      // Define the columns of the Event model
      name: {
        type: DataTypes.STRING,
        allowNull: false, // Name is required
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false, // Date is required
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false, // Location is required
      },
    },
    {
      sequelize,
      modelName: 'Event',
      timestamps: false, // Disable timestamps
    }
  );

  return Event;
};
