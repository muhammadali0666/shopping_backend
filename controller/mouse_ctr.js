const { Mouse } = require("../model");

Mouse.sync({ force: false });

const createMouse = async (req, res) => {
  try {
    const { title, comments, price, brand, category, picture } = req.body;

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

const deleteMouse = async (req, res) => {
  try {
    const { id } = req.params;

    const foundedId = await Mouse.findOne({ where: { id: id } });

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
    await Mouse.destroy({
      returning: true,
      plain: true,
      where: {
        id,
      },
    });
    return res.send({
      msg: "deleted mouse!",
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

    let objIsmsharif = await Mouse.findAll({
      where: { title: searchValidation },
    });
    return res.status(201).send(objIsmsharif);
  } catch (err) {
    return res.send({ msg: err.message });
  }
};

const updateMouse = async (req, res) => {
  try {
    const { title, comments, price, brand, category, picture } = req.body;
    const { id } = req.params;

    const updatedComponent = await Mouse.update(
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
  createMouse,
  getMouses,
  search,
  deleteMouse,
  updateMouse,
};
