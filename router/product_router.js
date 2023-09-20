const { Router } = require("express")
const {createNoubook, getNoutbooks, getAllProducts} = require('../controller/product_ctr')

const productRouter = Router()

productRouter.post("/create_noutbook", createNoubook)
productRouter.get("/get_noutbooks", getNoutbooks)
productRouter.get("/get_all_products", getAllProducts)

module.exports = productRouter