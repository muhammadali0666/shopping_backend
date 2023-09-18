const { Router } = require("../model");

Router.sync({ force: false });

const createRouter = async (req, res) => {
  try {
    const {
      title,
      comments,
      price,
      brand,
      category,
      picture,
    } = req.body;

    await Router.create({
      title,
      comments,
      price,
      brand,
      category,
      picture,
    });

    return res.status(200).send({
      msg: "router added",
    });
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

const getRouters = async (req, res) => {
  try {
    const nouts = await Router.findAll();
    return res.json(nouts);
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

module.exports = {
  createRouter,
  getRouters,
};
