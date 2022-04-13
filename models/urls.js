const mongoose = require("mongoose");
const { customAlphabet } = require("nanoid");
const shortid = require("shortid");
const Schema = mongoose.Schema;
const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz", 5);
// Create Schema
const UrlSchema = new Schema({
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    unique: true,
    default: () => `https://getSpace/${nanoid()}`,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});
module.exports = mongoose.model("UrlSchema", UrlSchema);
