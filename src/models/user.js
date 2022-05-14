const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
