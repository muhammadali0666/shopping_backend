const { Computer } = require("../model");

Computer.sync({ force: false });

const createComputer = async (req, res) => {
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
      protsessor,
      protsessorChastotasi,
      ram,
      sinfi,
    } = req.body;

    await Computer.create({
      title,
      comments,
      price,
      brand,
      category,
      picture,
      ekranDiaganali,
      ekranOlchami,
      protsessor,
      protsessorChastotasi,
      ram,
      sinfi,
    });

    return res.status(200).send({
      msg: "computer added",
    });
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

const getComuters = async (req, res) => {
  try {
    const nouts = await Computer.findAll();
    return res.json(nouts);
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

const deleteComputer = async (req, res) => {
  try {
    const { id } = req.params;

    const foundedId = await Computer.findOne({ where: { id: id } });

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
    await Computer.destroy({
      returning: true,
      plain: true,
      where: {
        id,
      },
    });
    return res.send({
      msg: "deleted computer!",
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

    let objIsmsharif = await Computer.findAll({
      where: { title: searchValidation },
    });
    return res.status(201).send(objIsmsharif);
  } catch (err) {
    return res.send({ msg: err.message });
  }
};

const updateComputer = async (req, res) => {
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
      protsessor,
      protsessorChastotasi,
      ram,
      sinfi,
    } = req.body;
    const { id } = req.params;

    const updatedComponent = await Computer.update(
      {
        title,
        comments,
        price,
        brand,
        category,
        picture,
        ekranDiaganali,
        ekranOlchami,
        protsessor,
        protsessorChastotasi,
        ram,
        sinfi,
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
  createComputer,
  getComuters,
  deleteComputer,
  search,
  updateComputer,
};
