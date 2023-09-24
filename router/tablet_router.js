const { Router } = require("express");
const {
  createTablet,
  getTablets,
  search,
  deleteTablet,
  updateTablet,
} = require("../controller/tablet_ctr");

const tabletRouter = Router();

tabletRouter.post("/create_tablet", createTablet);
tabletRouter.get("/get_tablets", getTablets);
tabletRouter.get("/search_tablet", search);
tabletRouter.delete("/delete_tablet/:id", deleteTablet);
tabletRouter.put("/update_tablet/:id", updateTablet);

module.exports = tabletRouter;
