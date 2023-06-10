require("dotenv").config();

const express = require("express");

const cors = require("cors");
const path = require("path");
const sequelize = require("./db");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");

const router = require("./routes/index");
const models = require("./models/models");

const errorHandling = require("./middleware/errorHandlingMiddleware");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://172.20.10.2:3000",
      "http://localhost:3000",
      "http://192.168.31.84:3000",
    ],
    // origin: '*',
    credentials: true,
  })
);

app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

app.all("*", notFoundMiddleware);
app.use(errorHandling);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
