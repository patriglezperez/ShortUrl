const Url = require("..//../models/urls");
const User = require("../../models/user")

function addNewUrl(req, res) {
  // El usuario escribe una URL
  if (req.body.url) {
    urlData = req.body.url;
  }
  const userId = req.body.userId
  const user = await User.findById(userId)
  // const urlData = req.body.url;
  // console.log("urlData aqui!!!", req.body);
  //Creamos una nueva
  const webadress = new Url({
    fullUrl: urlData,
    user:user._id
  });

  webadress.save((err) => {
    if (err) {
      return console.log(err);
    }
    res.send({
      fullUrl: urlData,
      shortUrl: webadress.shortUrl,
      date: new Date(),
      user: user
    });
  });
}
export default addNewUrl;
