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

module.exports = {
  createMonitor,
  getMonitors,
};
