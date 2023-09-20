const { Mouse } = require("../model");

Mouse.sync({ force: false });

const createMouse = async (req, res) => {
  try {
    const {
      title,
      comments,
      price,
      brand,
      category,
      picture,
    } = req.body;

    await Mouse.create({
      title,
      comments,
      price,
      brand,
      category,
      picture,
    });

    return res.status(200).send({
      msg: "mouse added",
    });
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

const getMouses = async (req, res) => {
  try {
    const nouts = await Mouse.findAll();
    return res.json(nouts);
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

module.exports = {
  createMouse,
  getMouses,
};
