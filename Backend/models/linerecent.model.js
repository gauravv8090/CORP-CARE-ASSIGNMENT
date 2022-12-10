const { default: mongoose } = require("mongoose");

const linerecentSchema = new mongoose.Schema({
  value: { type: Number }
});

const Linerecent = mongoose.model("linerecent", linerecentSchema);

module.exports = Linerecent;
