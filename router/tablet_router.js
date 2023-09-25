const { Router } = require("express");
const {
  createTablet,
  getTablets,
  search,
  deleteTablet,
  updateTablet,
} = require("../controller/tablet_ctr");
const { verifyAdmin } = require("../middleware/auth_middleware");

const tabletRouter = Router();

tabletRouter.post("/create_tablet", verifyAdmin, createTablet);
tabletRouter.get("/get_tablets", getTablets);
tabletRouter.get("/search_tablet", search);
tabletRouter.delete("/delete_tablet/:id", verifyAdmin, deleteTablet);
tabletRouter.put("/update_tablet/:id", verifyAdmin, updateTablet);

module.exports = tabletRouter;
