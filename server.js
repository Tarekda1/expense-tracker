const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

//configure env files
dotenv.config({ path: "./config/config.env" });

const transactions = require("./routes/transactions");

const PORT = process.env.PORT;

const app = express();

app.use("/api/v1/transactions", transactions);

app.listen(PORT, console.log(`server running on ${PORT}`.yellow.bold));
