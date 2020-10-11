const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const getImagesFromImgur = require("./endpoints/getImagesFromImgur");

const app = express();
const port = 5000;

dotenv.config();

app.use(bodyParser.text());

app.post("/get-images-from-imgur", getImagesFromImgur);

app.listen(port, () => {
  console.log(`Api server listening at http://localhost:${port}`);
});
