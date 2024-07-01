'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class StageEvent extends Model {
    static associate(models) {
      // Define association here if needed
    }
  }

  StageEvent.init(
    {
      eventId: DataTypes.INTEGER,
      stageId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'StageEvent',
      timestamps: false, // Disable timestamps
    }
  );

  return StageEvent;
};

