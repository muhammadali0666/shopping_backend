const { Router } = require("express");
const {
  createPult,
  getPults,
  search,
  deletePult,
  updatePult,
} = require("../controller/pult_ctr");
const { verifyAdmin } = require("../middleware/auth_middleware");

const pultRouter = Router();

pultRouter.post("/create_pult",verifyAdmin, createPult);
pultRouter.get("/get_Pults", getPults);
pultRouter.get("/search_pult", search);
pultRouter.delete("/delete_pult/:id",verifyAdmin, deletePult);
pultRouter.put("/update_pult/:id",verifyAdmin, updatePult);

module.exports = pultRouter;
