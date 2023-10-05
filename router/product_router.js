const { Router } = require("express");
const {
  createNoubook,
  getNoutbooks,
  search,
  updateNoutbook,
  deleteNoutbook,
} = require("../controller/product_ctr");
const { verifyAdmin } = require("../middleware/auth_middleware");

const productRouter = Router();

productRouter.post("/create_noutbook", verifyAdmin, createNoubook);
productRouter.get("/get_noutbooks", getNoutbooks);
productRouter.get("/search_noutbook", search);
productRouter.put("/update_noutbook/:id", verifyAdmin, updateNoutbook);
productRouter.delete("/delete_noutbook/:id", verifyAdmin, deleteNoutbook);

module.exports = productRouter;
