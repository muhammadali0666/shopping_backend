const { Kalonka } = require("../model");

Kalonka.sync({ force: false });

const createKalonka = async (req, res) => {
  try {
    const {
      title,
      comments,
      price,
      brand,
      category,
      picture,
    } = req.body;

    await Kalonka.create({
      title,
      comments,
      price,
      brand,
      category,
      picture,
    });

    return res.status(200).send({
      msg: "kalonka added",
    });
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

const getKalonka = async (req, res) => {
  try {
    const nouts = await Kalonka.findAll();
    return res.json(nouts);
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

module.exports = {
  createKalonka,
  getKalonka,
};
