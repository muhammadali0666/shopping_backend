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

const deleteKalonka = async (req, res) => {
  try {
    const { id } = req.params;

    const foundedId = await Kalonka.findOne({ where: { id: id } });

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

    await Kalonka.destroy({
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
      msg: "deleted kalonka!",
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

    let objIsmsharif = await Kalonka.findAll({
      where: { title: searchValidation },
    });
    return res.status(201).send(objIsmsharif);
  } catch (err) {
    return res.send({ msg: err.message });
  }
};

const updateKalonka = async (req, res) => {
  try {
    const { title, price, comments, brand, category, picture } = req.body;
    const { id } = req.params;

    const updatedComponent = await Kalonka.update(
      { title, price, comments, brand, category, picture },
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
  createKalonka,
  getKalonka,
  deleteKalonka,
  search,
  updateKalonka
};
