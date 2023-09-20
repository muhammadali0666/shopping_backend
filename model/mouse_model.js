const { sequelize, DataTypes } = require("../db/db_config");
const { UUIDV4 } = require("sequelize");

const Mouse = sequelize.define("mouse", {
  id: {
    type: DataTypes.TEXT,
    defaultValue: UUIDV4,
    primaryKey: true,
  },

  title: {
    type: DataTypes.TEXT,
  },
  comments: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.TEXT,
  },
  brand: {
    type: DataTypes.TEXT,
  },
  picture: {
    type: DataTypes.TEXT,
  },
  category: {
    type: DataTypes.TEXT,
  }
});

module.exports = Mouse;
