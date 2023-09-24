const { Printer } = require("../model");

Printer.sync({ force: false });

const createPrinter = async (req, res) => {
  try {
    const {
      title,
      comments,
      price,
      brand,
      category,
      picture,
      sinfi,
    } = req.body;

    await Printer.create({
      title,
      comments,
      price,
      brand,
      category,
      picture,
      sinfi,
    });

    return res.status(200).send({
      msg: "printer added",
    });
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

const getPrinters = async (req, res) => {
  try {
    const nouts = await Printer.findAll();
    return res.json(nouts);
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

const deletePrinter = async (req, res) => {
  try {
    const { id } = req.params;

    const foundedId = await Printer.findOne({ where: { id: id } });

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
    await Printer.destroy({
      returning: true,
      plain: true,
      where: {
        id,
      },
    });
    return res.send({
      msg: "deleted printer!",
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

    let objIsmsharif = await Printer.findAll({
      where: { title: searchValidation },
    });
    return res.status(201).send(objIsmsharif);
  } catch (err) {
    return res.send({ msg: err.message });
  }
};

const updatePrinter = async (req, res) => {
  try {
    const { title, comments, price, brand, category, picture, sinfi } = req.body;
    const { id } = req.params;

    const updatedComponent = await Printer.update(
      {
        title,
        comments,
        price,
        brand,
        category,
        picture,
        sinfi
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
  createPrinter,
  getPrinters,
  search,
  updatePrinter,
  deletePrinter
};
