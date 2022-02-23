"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      story.belongsTo(models.space);
    }
  }
  story.init(
    {
      name: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "story",
    }
  );
  return story;
};
