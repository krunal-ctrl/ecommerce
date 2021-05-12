require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");

//DataBase Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    cosolog.log(err);
  });

//MiddleWare
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);

//port
const port = 3000;

//Strting Server
app.listen(port, () => console.log(`App is running at ${port}`));
