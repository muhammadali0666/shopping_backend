const { NoutbookProduct } = require("../model");
const { ComputerComponents } = require("../model");
const { Monitor } = require("../model");
const { Computer } = require("../model");
const { Pult } = require("../model");
const { Tablet } = require("../model");
const { Printer } = require("../model");
const { Kalonka } = require("../model");
const { Router } = require("../model");

NoutbookProduct.sync({ force: false });

const createNoubook = async (req, res) => {
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

    await NoutbookProduct.create({
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
const getAllProducts = async (req, res) => {
  try {
    const nouts = await NoutbookProduct.findAll();
    const components = await ComputerComponents.findAll();
    // console.log(nouts);
    return res.json(components);
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

module.exports = {
  createNoubook,
  getNoutbooks,
  getAllProducts,
};
