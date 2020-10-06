const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const axios = require("axios");

const app = express();
const port = 5000;

dotenv.config();
const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID;

app.use(bodyParser.text());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/get-images-from-imgur", async (req, res) => {
  try {
    let { section, showViral, sort, window, page } = JSON.parse(req.body);

    let endpoint = `https://api.imgur.com/3/gallery/${section}/${sort}`;
    if (window) endpoint += `/${window}`;
    endpoint += `/${page}.json?showViral=${showViral}`;

    console.log(endpoint); // TODO: Remove

    let imgurResponse = await axios(endpoint, {
      headers: {
        Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
      },
    }).catch((error) => console.error("AXIOS ERR: ", error));

    res.json(imgurResponse.data.data);
  } catch (error) {
    // TODO: Better error handling
    console.error(error);
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Api server listening at http://localhost:${port}`);
});
