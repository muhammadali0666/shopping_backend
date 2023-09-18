const { sequelize, DataTypes } = require("../db/db_config");
const { UUIDV4 } = require("sequelize");

const Monitor = sequelize.define("monitor", {
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
  category: {
    type: DataTypes.TEXT,
  },
  ekranDiaganali: {
    type: DataTypes.TEXT,
  },
  ekranOlchami: {
    type: DataTypes.TEXT,
  },
});

module.exports = Monitor;
