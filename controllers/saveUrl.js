const Url = require("../models/urls");

function saveUrl(req, res) {
  // El usuario escribe una URL
  if (req.body.url) {
    urlData = req.body.url;
  }

  //Comprobamos si existe
  Url.findOne({ fullUrl: urlData }, (err, doc) => {
    if (doc) {
      res.send({ "Entry found at db": doc });
    } else {
      console.log("This is a new URL");
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
        });
      });
    }
  });

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
}

module.exports = saveUrl;
