const { Router } = require("express")
const {createNoubook} = require('../controller/product_ctr')

const productRouter = Router()

productRouter.post("/create_product", createNoubook)

module.exports = productRouter