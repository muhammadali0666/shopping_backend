const { sequelize, DataTypes } = require("../db/db_config");
const { UUIDV4 } = require("sequelize");

const Shopping = sequelize.define("shopping", {
  id: {
    type: DataTypes.TEXT,
    defaultValue: UUIDV4,
    primaryKey: true,
  },

  title: {
    type: DataTypes.TEXT,
  },
  user_id: {
    type: DataTypes.TEXT,
  },
  product_id: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.TEXT,
  },
  img: {
    type: DataTypes.TEXT
  }
});

module.exports = Shopping;