const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRegister = require("./router/auth_router");
const productRouter = require("./router/product_router");
const componentRouter = require("./router/computerComponents_router");
const monitorRouter = require("./router/monitor_router");
const computerRouter = require("./router/comuter_router");
const pultRouter = require("./router/pult_router");
const tabletRouter = require("./router/tablet_router");
const printerRouter = require("./router/printer_router");
const kalonkaRouter = require("./router/kalonka_router");
const routerRouter = require("./router/router_router");
const mouseRouter = require("./router/mouse_router");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const app = express();

app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 4000;

// app.use(express.json());
// client.messages
//   .create({
//     body: "Hello from twilio-node",
//     to: "+998904565025", // Text your number
//     from: "+998904565025", // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));

//////////////////// Router
app.use(authRegister);
app.use(productRouter);
app.use(componentRouter);
app.use(monitorRouter);
app.use(computerRouter);
app.use(pultRouter);
app.use(tabletRouter);
app.use(printerRouter);
app.use(kalonkaRouter);
app.use(routerRouter);
app.use(mouseRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} the Port`);
});
