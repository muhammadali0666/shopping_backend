const { Router } = require("express");
const {
  createComputer,
  getComuters,
  deleteComputer,
  search,
  updateComputer,
} = require("../controller/computer_ctr");

const computerRouter = Router();

computerRouter.post("/create_computer", createComputer);
computerRouter.get("/get_computers", getComuters);
computerRouter.delete("/delete_computer/:id", deleteComputer)
computerRouter.get("/search_computer", search)
computerRouter.put("/update_computer/:id", updateComputer)

module.exports = computerRouter;
