'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class SetTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  SetTime.init(
    {
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
