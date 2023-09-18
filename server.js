const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRegister = require("./router/auth_router");
const productRouter = require("./router/product_router");
const componentRouter = require("./router/computerComponents_router");

const app = express();

app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

//////////////////// Router
app.use(authRegister);
app.use(productRouter);
app.use(componentRouter)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} the Port`);
});
