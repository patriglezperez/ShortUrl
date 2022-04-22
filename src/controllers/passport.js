const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

//Nueva estrategia de verificicación
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      const user = await User.findOne({ email: email });
      if (!user) {
        return done(null, false, { message: "not user find" }); //Null porque no hay error + false porque no lo ha encontrado
      } else {
        const match = await user.matchPassword(password);
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect Password" });
        }
      }
    }
  )
);

//Si el usuario se loguea almacenamos en sesion su id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//Toma un id y genera un usuario para poder utilizar sus datos
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    //Si hay un usuario en la sesion lo que va a hacer es buscar ese usuario y si lo encuntra obtiene ese usuario y lo devuelve
    done(err, user);
  });
});
