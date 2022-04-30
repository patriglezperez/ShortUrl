const Url = require("../models/urls");
const User = require("../models/user");

async function saveNewUrl(req, res) {
  // El usuario escribe una URL
  // if (req.body) {
  //   urlData = req.body.url;
  //   userId = req.body.userId;
  // }
  const urlData = req.body.url;
  const userId = req.body.userId;

  const user = await User.findById(userId);

  //Creamos una nueva url

  const newUrl = new Url({
    fullUrl: urlData,
    user: user._id,
    date: new Date(),
  });

  console.log(newUrl.user, "user");
  try {
    const savedUrl = await newUrl.save();

    user.urls = user.urls.concat(savedUrl._id);
    await user.save();

    res.json(savedUrl);
  } catch (error) {
    return console.log(error);
  }
  // newUrl.save((err) => {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   res.send({
  //     newUrl,
  //   });
  // });
}

//Con esto me da error el db y no se solucionarlo
// function createAddres(client, addres) {
//   const result = client.db("shortUrl").collection("urlschemas").insertOne(addres);
//   res.json({
//     text: "created new addres",
//     fullUrl: urlData,
//     shortUrl: result.id,
//   });
// }
// createAddres();

module.exports = saveNewUrl;
