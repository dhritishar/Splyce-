//create the server
const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest obejct
const app = express();

//create middlewares, remove parse errors
app.use(express.json());
app.use(moragan("dev"));

//setup routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/client", require("./routes/clientRoutes"));



//connect port
const port = process.env.PORT || 8080;

//listen port, callback for running server, add colours 
app.listen(port, () => {
  console.log(`The Server is Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white);
});