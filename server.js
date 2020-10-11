const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const getImagesFromImgur = require("./api/getImagesFromImgur");

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(bodyParser.text());

app.post("/api/get-images-from-imgur", getImagesFromImgur);

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Api server listening at port ${port}`);
});
