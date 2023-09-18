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

module.exports = {
  createPrinter,
  getPrinters,
};
