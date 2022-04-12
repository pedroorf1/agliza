const express = require("express");
const server = express();
const cors = require("cors");

server.use(express.json({ limit: "10mb" }));
const corsOptions = {
  origin: "http://localhost",
  optionsSuccessStatus: 200 // for some legacy browsers
};

server.use(cors(corsOptions));
//Routers injection
const homeRouter = require("../src/routers/homeRouter");
const clientRouter = require("../src/routers/clientRouter");
const planRouter = require("../src/routers/planRouter");
const userRouter = require("../src/admin/userRouter");
const proposalRouter = require("../src/routers/proposalRouter");

server.use(homeRouter);
server.use("/client", clientRouter);
server.use("/plan", planRouter);
server.use("/admin", userRouter);
server.use("/client", proposalRouter);

module.exports = server;