const Url = require("../models/urls");

async function findFullUrl(req, res) {
  const { shortUrl } = await req.params;
  // console.log("esto es lo que buscamos", shortUrl);
  // const result = await Url.find({}).where({ shortUrl: shortUrl });
  const result = await Url.findOne({ shortUrl }).lean();
  try {
    result;
    return res.send({ result });
  } catch (error) {
    return res.send({ error: "Sorry, this link may have expired" });
  }
}

module.exports = findFullUrl;

// async function findFullUrl(client, nameOfAddress) {
//   const result = await client
//     .db("shortUrl")
//     .collection("urlschemas")
//     .findOne({ shortUrl: shortUrl });
//   if (result) {
//     console.log(
//       `Found an address in the collection  with the name ${nameOfAddress}`
//     );
//     console.log(result);
//   } else {
//     console.log("Address not found");
//   }
// }
// module.exports = findFullUrl;
