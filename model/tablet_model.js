const { sequelize, DataTypes } = require("../db/db_config");
const { UUIDV4 } = require("sequelize");

const Tablet = sequelize.define("tablet", {
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
  picture: {
    type: DataTypes.TEXT
  },
  ekranDiaganali: {
    type: DataTypes.TEXT,
  },
  ekranOlchami: {
    type: DataTypes.TEXT,
  },
  ram: {
    type: DataTypes.TEXT,
  },
  sinfi: {
    type: DataTypes.TEXT,
  },
  xotira: {
    type: DataTypes.TEXT,
  },
  rang: {
    type: DataTypes.TEXT,
  },
  kamera: {
    type: DataTypes.TEXT,
  },
});

module.exports = Tablet;
