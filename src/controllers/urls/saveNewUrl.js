const User = require("../../models/user");
const Url = require("../../models/urls");

async function saveNewUrl(req, res, next) {
  // El usuario escribe una URL
  // if (req.body) {
  //   urlData = req.body.url;
  //   userId = req.body.userId;
  // }
  const urlData = req.body.url;

  /*you cannot create a note if you do not have the token*/

  //sacar userId de req
  const { userId } = req;

  const user = await User.findById(userId);

  //Creamos una nueva url

  const newUrl = new Url({
    fullUrl: urlData,
    user: user._id,
    date: new Date(),
  });

  console.log(newUrl, "newUrl");
  try {
    const savedUrl = await newUrl.save();
    user.urls = user.urls.concat(savedUrl._id);
    await user.save();
    res.json(savedUrl);
  } catch (error) {
    return console.log(error);
  }
}

module.exports = saveNewUrl;
