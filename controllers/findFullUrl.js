const Url = require("../models/urls");

function findFullUrl(req, res) {
  const shortUrl = req.body.shortUrl;
  // console.log("esto es lo que buscamos", shortUrl);
  const result = Url.findOne({
    shortUrl: shortUrl,
  });

  console.log("este es el result", result);
  if (result) {
    return res.json({ fullUrl: result.fullUrl });
  } else {
    return res.json({ error: "Sorry, this link may have expired" });
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
