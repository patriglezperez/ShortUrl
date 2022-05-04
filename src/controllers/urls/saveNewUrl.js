const Url = require("../../models/urls");

async function saveNewUrl(req, res, next) {
  // The user types a URL
  const urlData = req.body.url;

  const newUrl = new Url({
    fullUrl: urlData,
    date: new Date(),
  });
  console.log(newUrl, "newUrl");

  try {
    const savedUrl = await newUrl.save();
    res.json(savedUrl);
  } catch (error) {
    return console.log(error);
  }
}
module.exports = saveNewUrl;
