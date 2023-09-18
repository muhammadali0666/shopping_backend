const { Router } = require("express")
const {createProduct} = require('../controller/product_ctr')

const productRouter = Router()

productRouter.post("/create_product", createProduct)

module.exports = productRouter