const axios = require("axios");

const getImagesFromImgur = async (req, res) => {
  let { section, showViral, sort, window, page } = JSON.parse(req.body);

  let endpoint = `https://api.imgur.com/3/gallery/${section}/${sort}`;
  if (window) endpoint += `/${window}`;
  endpoint += `/${page}.json?showViral=${showViral}`;

  await axios(endpoint, {
    headers: {
      Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
    },
  })
    .then((response) => res.json(response.data.data))
    .catch((error) => res.status(500).send(error));
};

module.exports = getImagesFromImgur;
