const { NoutbookProduct } = require("../model");

NoutbookProduct.sync({ force: false });

const createNoubook = async (req, res) => {
  try {
    const {
      title,
      comments,
      price,
      brand,
      category,
      ekranDiaganali,
      ekranOlchami,
      protsessor,
      protsessorChastotasi,
      ram,
      sinfi,
    } = req.body;

    await NoutbookProduct.create({
      title,
      comments,
      price,
      brand,
      category,
      ekranDiaganali,
      ekranOlchami,
      protsessor,
      protsessorChastotasi,
      ram,
      sinfi,
    });

    return res.status(200).send({
      msg: "noutbook added",
    });
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

const getNoutbooks = async (req, res) => {
  try {
    const nouts = await NoutbookProduct.findAll();
    return res.json(nouts);
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

module.exports = {
  createNoubook,
  getNoutbooks,
};
