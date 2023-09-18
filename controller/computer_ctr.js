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

module.exports = {
  createComputer,
  getComuters,
};
