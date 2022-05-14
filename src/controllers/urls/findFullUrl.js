const Url = require("../../models/urls");
async function findFullUrl(req, res) {
  //the user enters the new url
  const { shortUrl } = await req.params;

  const result = await Url.findOne({ shortUrl }).lean();

  try {
    result;
    return res.send({ result });
  } catch (error) {
    return res.send({ error: "Sorry, this link may have expired" });
  }
}
module.exports = findFullUrl;
