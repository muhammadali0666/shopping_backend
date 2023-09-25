const { Router } = require("express");
const {
  createRouter,
  getRouters,
  search,
  deleteRouter,
  updateRouter,
} = require("../controller/router_ctr");
const { verifyAdmin } = require("../middleware/auth_middleware");

const routerRouter = Router();

routerRouter.post("/create_router", verifyAdmin, createRouter);
routerRouter.get("/get_routers", getRouters);
routerRouter.get("/search_router", search);
routerRouter.delete("/delete_router/:id", verifyAdmin, deleteRouter);
routerRouter.put("/update_router/:id", verifyAdmin, updateRouter);

module.exports = routerRouter;
