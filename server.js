const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const path = require("path");

//configure env files
dotenv.config({ path: "./config/config.env" });

//connect to mongodb cloud
connectDB();

const transactions = require("./routes/transactions");

const PORT = process.env.PORT;

const app = express();

//add body parser to send json data inside body request
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "prod") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    return res.sendFile(
      path.resolve(__dirname, "client", "build", "index.html")
    );
  });
}

app.listen(PORT, console.log(`server running on ${PORT}`.yellow.bold));
