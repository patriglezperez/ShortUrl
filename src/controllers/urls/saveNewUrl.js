const Url = require("../../models/urls");

async function saveNewUrl(req, res, next) {
  // the user enters a url
  const urlData = req.body.url;

  //we create the new url
  const newUrl = new Url({
    fullUrl: urlData,
    date: new Date(),
  });

  // we keep it and return it with all things
  try {
    const savedUrl = await newUrl.save();
    res.json(savedUrl);
  } catch (error) {
    return error;
  }
}
module.exports = saveNewUrl;
