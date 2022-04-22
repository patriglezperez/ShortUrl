const Url = require("../models/urls");

async function deleteUrl(req, res) {
  // El usuario escribe una URL corta
  const { shortUrl } = await req.params;
  console.log("esto es lo que buscamos", shortUrl);
  // const result = await Url.find({}).where({ shortUrl: shortUrl });
  const result = await Url.deleteOne({ shortUrl }).lean();
  //   const result = await Url.deleteOne({}).where({ shortUrl: shortUrl });

  try {
    result;
    return res.send({ result });
  } catch (error) {
    return res.send({ error: "Sorry, this link may have expired" });
  }
}
module.exports = deleteUrl;
