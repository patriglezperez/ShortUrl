const Url = require("../models/urls");

async function findAllUrl(req, res) {
  const result = await Url.find({});
  try {
    result;
    return res.send({ result });
  } catch (error) {
    return res.send({ error: "Sorry, this link may have expired" });
  }
}

module.exports = findAllUrl;
