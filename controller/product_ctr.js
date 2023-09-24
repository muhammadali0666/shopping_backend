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

const deleteNoutbook = async (req, res) => {
  try {
    const { id } = req.params;

    const foundedId = await NoutbookProduct.findOne({ where: { id: id } });

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
    await NoutbookProduct.destroy({
      returning: true,
      plain: true,
      where: {
        id,
      },
    });
    return res.send({
      msg: "deleted noutbook!",
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

    let objIsmsharif = await NoutbookProduct.findAll({
      where: { title: searchValidation },
    });
    return res.status(201).send(objIsmsharif);
  } catch (err) {
    return res.send({ msg: err.message });
  }
};

const updateNoutbook = async (req, res) => {
  try {
    const {
      title,
      comments,
      price,
      brand,
      category,
      picture,
      sinfi,
      ekranDiaganali,
      ekranOlchami,
      protsessor,
      protsessorChastotasi,
      ram,
    } = req.body;
    const { id } = req.params;

    const updatedComponent = await NoutbookProduct.update(
      {
        title,
        comments,
        price,
        brand,
        category,
        picture,
        sinfi,
        ekranDiaganali,
        ekranOlchami,
        protsessor,
        protsessorChastotasi,
        ram,
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
  createNoubook,
  getNoutbooks,
  getAllProducts,
  search, 
  updateNoutbook,
  deleteNoutbook
};
