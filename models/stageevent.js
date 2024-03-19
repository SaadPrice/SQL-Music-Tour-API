'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class StageEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      timestamps: false, // Add this line to disable timestamps
    }
  );

  return StageEvent;
};
