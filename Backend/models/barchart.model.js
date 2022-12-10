const { default: mongoose } = require("mongoose");

const barSchema = new mongoose.Schema({
  key1: { type: Number },
  key2: { type: Number }
});

const Barchart = mongoose.model("barchart", barSchema);

module.exports = Barchart;
