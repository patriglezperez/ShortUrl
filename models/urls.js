const mongoose = require("mongoose");
const shortid = require("shortid");
const Schema = mongoose.Schema;

// Create Schema
const UrlSchema = new Schema({
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    unique: true,
    default: shortid.generate,
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
