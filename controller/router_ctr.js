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

const deleteRouter = async (req, res) => {
  try {
    const { id } = req.params;

    const foundedId = await Router.findOne({ where: { id: id } });

    if (!foundedId) {
      return res.send({
        msg: "id not found",
      });
    }

    if (!id) {
      return res.send({
        msg: "id required",
      });
    }
    await Router.destroy({
      returning: true,
      plain: true,
      where: {
        id,
      },
    });
    return res.send({
      msg: "deleted router!",
    });
  } catch (error) {
    return res.send({
      msg: error.message,
    });
  }
};

const search = async (req, res) => {
  try {
    const { search } = req.headers;

    let searchValidation = search.trim();

    let objIsmsharif = await Router.findAll({
      where: { title: searchValidation },
    });
    return res.status(201).send(objIsmsharif);
  } catch (err) {
    return res.send({ msg: err.message });
  }
};

const updateRouter = async (req, res) => {
  try {
    const { title, comments, price, brand, category, picture } = req.body;
    const { id } = req.params;

    const updatedComponent = await Router.update(
      {
        title,
        comments,
        price,
        brand,
        category,
        picture,
      },
      {
        returning: true,
        plain: false,
        where: {
          id,
        },
      }
    );

    return res.send(updatedComponent.filter((e) => e));
  } catch (error) {
    return res.send({
      msg: error.message,
    });
  }
};

module.exports = {
  createRouter,
  getRouters,
  search,
  deleteRouter,
  updateRouter
};
