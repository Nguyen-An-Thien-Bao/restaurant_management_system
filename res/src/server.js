require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import apiWebRouter from "./route/api";

const cors = require("cors");

let app = express();
app.use(cors());

// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

apiWebRouter(app);

// config cookie-parser
app.use(cookieParser());

// connectDB();

// app.use((req, res) => {
//   return res.send("404 not found");
// });

let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Backend Nodejs is running on the port: " + port);
});
