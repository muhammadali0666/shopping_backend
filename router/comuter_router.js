const { Router } = require("express");
const {
  createComputer,
  getComuters,
  deleteComputer,
  search,
  updateComputer,
} = require("../controller/computer_ctr");
const {verifyAdmin} = require("../middleware/auth_middleware")

const computerRouter = Router();

computerRouter.post("/create_computer", verifyAdmin, createComputer);
computerRouter.get("/get_computers", getComuters);
computerRouter.delete("/delete_computer/:id", verifyAdmin, deleteComputer)
computerRouter.get("/search_computer", search)
computerRouter.put("/update_computer/:id", verifyAdmin, updateComputer)

module.exports = computerRouter;
