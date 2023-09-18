const { Product } = require("../model");

Product.sync({ force: false });

const createProduct = async (req, res) => {
  try {
    const {title, comments, price, brand, category } = req.body

    await Product.create({title, comments, price, brand, category})

    return res.status(200).send({
      msg: "product added"
    })
  } catch (error) {
    return res.status(401).send({
      msg: error.message,
    });
  }
};

module.exports = {
  createProduct,
};
