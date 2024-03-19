'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Stage.init(
    {
      name: DataTypes.STRING,
      capacity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Stage',
      timestamps: false, // Add this line to disable timestamps
    }
  );

  return Stage;
};
