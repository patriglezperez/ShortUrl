const Url = require("../models/urls");

function saveNewUrl(req, res) {
  // El usuario escribe una URL
  if (req.body.url) {
    urlData = req.body.url;
  }
  // const urlData = req.body.url;
  console.log("urlData aqui!!!", req.body);
  //Creamos una nueva
  const webadress = new Url({
    fullUrl: urlData,
  });

  webadress.save((err) => {
    if (err) {
      return console.log(err);
    }
    res.send({
      fullUrl: urlData,
      shortUrl: webadress.shortUrl,
      date: new Date(),
    });
  });
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
