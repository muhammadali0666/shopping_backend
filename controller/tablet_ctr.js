const { Tablet } = require("../model");

Tablet.sync({ force: false });

const createTablet = async (req, res) => {
  try {
    const {
      title,
      comments,
      price,
      brand,
      category,
      picture,
      ekranDiaganali,
      ekranOlchami,
      ram,
      sinfi,
      xotira,
      rang, 
      kamera,
    } = req.body;

    await Tablet.create({
      title,
      comments,
      price,
      brand,
      category,
      picture,
      ekranDiaganali,
      ekranOlchami,
      ram,
      sinfi,
      xotira,
      rang, 
      kamera,
    });

    return res.status(200).send({
      msg: "tablet added",
    });
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

const getTablets = async (req, res) => {
  try {
    const nouts = await Tablet.findAll();
    return res.json(nouts);
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

module.exports = {
  createTablet,
  getTablets,
};
