'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class MeetGreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  MeetGreet.init(
    {
      eventId: DataTypes.INTEGER,
      location: DataTypes.STRING,
      startTime: DataTypes.TIME,
      endTime: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: 'MeetGreet',
      timestamps: false, // Add this line to disable timestamps
    }
  );

  return MeetGreet;
};
