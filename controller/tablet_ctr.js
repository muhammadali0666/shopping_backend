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

const deleteTablet = async (req, res) => {
  try {
    const { id } = req.params;

    const foundedId = await Tablet.findOne({ where: { id: id } });

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
    await Tablet.destroy({
      returning: true,
      plain: true,
      where: {
        id,
      },
    });
    return res.send({
      msg: "deleted tablet!",
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

    let objIsmsharif = await Tablet.findAll({
      where: { title: searchValidation },
    });
    return res.status(201).send(objIsmsharif);
  } catch (err) {
    return res.send({ msg: err.message });
  }
};

const updateTablet = async (req, res) => {
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
    const { id } = req.params;

    const updatedComponent = await Tablet.update(
      {
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
  createTablet,
  getTablets,
  search,
  deleteTablet,
  updateTablet,
};
