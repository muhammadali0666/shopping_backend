const { Pult } = require("../model");

Pult.sync({ force: false });

const createPult = async (req, res) => {
  try {
    const { title, comments, price, brand, category, picture } = req.body;

    await Pult.create({
      title,
      comments,
      price,
      brand,
      category,
      picture,
    });

    return res.status(200).send({
      msg: "game console added",
    });
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

const getPults = async (req, res) => {
  try {
    const nouts = await Pult.findAll();
    return res.json(nouts);
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

const deletePult = async (req, res) => {
  try {
    const { id } = req.params;

    const foundedId = await Pult.findOne({ where: { id: id } });

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
    await Pult.destroy({
      returning: true,
      plain: true,
      where: {
        id,
      },
    });
    return res.send({
      msg: "deleted konsol!",
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

    let objIsmsharif = await Pult.findAll({
      where: { title: searchValidation },
    });
    return res.status(201).send(objIsmsharif);
  } catch (err) {
    return res.send({ msg: err.message });
  }
};

const updatePult = async (req, res) => {
  try {
    const { title, comments, price, brand, category, picture } = req.body;
    const { id } = req.params;

    const updatedComponent = await Pult.update(
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
  createPult,
  getPults,
  search,
  deletePult,
  updatePult,
};
