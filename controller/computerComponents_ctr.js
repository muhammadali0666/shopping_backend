const { ComputerComponents } = require("../model");

ComputerComponents.sync({ force: false });

const createComponent = async (req, res) => {
  try {
    const { title, comments, price, brand, category } = req.body;

    await ComputerComponents.create({
      title,
      comments,
      price,
      brand,
      category,
    });

    return res.status(200).send({
      msg: "component added",
    });
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

const getComponents = async (req, res) => {
  try {
    const nouts = await ComputerComponents.findAll();
    return res.json(nouts);
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

module.exports = {
  createComponent,
  getComponents,
};
