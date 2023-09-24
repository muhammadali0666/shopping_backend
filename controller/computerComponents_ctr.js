const { ComputerComponents } = require("../model");

ComputerComponents.sync({ force: false });

const createComponent = async (req, res) => {
  try {
    const { title, comments, price, brand, category, picture } = req.body;

    await ComputerComponents.create({
      title,
      comments,
      price,
      brand,
      category,
      picture,
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

const deleteComponent = async (req, res) => {
  try {
    const { id } = req.params;

    const foundedId = await ComputerComponents.findOne({ where: { id: id } });

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

    await ComputerComponents.destroy({
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
      msg: "deleted component!",
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

    let searchToLowerCase = search.toLowerCase();

    let searchValidation = searchToLowerCase.trim();

    let objIsmsharif = await ComputerComponents.findAll({
      where: { title: searchValidation },
    });
    return res.status(201).send(objIsmsharif);
  } catch (err) {
    return res.send({ msg: err.message });
  }
};

const updateComponent = async (req, res) => {
  try {
    const { title, price, comments, brand, category } = req.body;
    const { id } = req.params;

    const updatedComponent = await ComputerComponents.update(
      { title, price, comments, brand, category },
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
  createComponent,
  getComponents,
  deleteComponent,
  search,
  updateComponent,
};
