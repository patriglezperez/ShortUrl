const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  urls: [
    {
      type: Schema.Types.ObjectId,
      ref: "UrlSchema",
    },
  ],
});

UserSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;

    delete returnedObject.passwordHash;
  },
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", UserSchema);
