const { Monitor } = require("../model");

Monitor.sync({ force: false });

const createMonitor = async (req, res) => {
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
    } = req.body;

    await Monitor.create({
      title,
      comments,
      price,
      brand,
      category,
      picture,
      ekranDiaganali,
      ekranOlchami,
    });

    return res.status(200).send({
      msg: "monitor added",
    });
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

const getMonitors = async (req, res) => {
  try {
    const nouts = await Monitor.findAll();
    return res.json(nouts);
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};
const deleteMonitor = async (req, res) => {
  try {
    const { id } = req.params;

    const foundedId = await Monitor.findOne({ where: { id: id } });

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

    await Monitor.destroy({
      returning: true,
      plain: true,
      where: {
        id,
      },
    });
    if (!id) {
      return res.send({
        msg: "id required",
      });
    }

    return res.send({
      msg: "deleted monitor!",
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

    let objIsmsharif = await Monitor.findAll({
      where: { title: searchValidation },
    });
    return res.status(201).send(objIsmsharif);
  } catch (err) {
    return res.send({ msg: err.message });
  }
};

const updateMonitor = async (req, res) => {
  try {
    const { title, price, comments, brand, category, picture, ekranDiaganali, ekranOlchami } = req.body;
    const { id } = req.params;

    const updatedComponent = await Monitor.update(
      { title, price, comments, brand, category, picture, ekranDiaganali, ekranOlchami },
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
  createMonitor,
  getMonitors,
  deleteMonitor,
  search,
  updateMonitor
};
