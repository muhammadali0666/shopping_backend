const { Router } = require("express");
const {
  createPult,
  getPults,
  search,
  deletePult,
  updatePult,
} = require("../controller/pult_ctr");

const pultRouter = Router();

pultRouter.post("/create_pult", createPult);
pultRouter.get("/get_Pults", getPults);
pultRouter.get("/search_pult", search);
pultRouter.delete("/delete_pult/:id", deletePult);
pultRouter.put("/update_pult/:id", updatePult);

module.exports = pultRouter;
