require("dotenv").config();

const express = require("express");

const cors = require("cors");
const path = require("path");
const sequelize = require("./db");
const fileUpload = require("express-fileupload");

const router = require("./routes/index");
const models = require("./models/models");

const errorHandling = require("./middleware/errorHandlingMiddleware");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
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
