const { Router } = require("express")
const {createNoubook, getNoutbooks, getAllProducts,search,updateNoutbook, deleteNoutbook} = require('../controller/product_ctr')

const productRouter = Router()

productRouter.post("/create_noutbook", createNoubook)
productRouter.get("/get_noutbooks", getNoutbooks)
productRouter.get("/get_all_products", getAllProducts)
productRouter.get("/search_noutbook", search)
productRouter.put("/update_noutbook/:id", updateNoutbook)
productRouter.delete("/delete_noutbook/:id", deleteNoutbook)

module.exports = productRouter