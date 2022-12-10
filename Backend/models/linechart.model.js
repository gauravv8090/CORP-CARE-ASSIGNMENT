const { default: mongoose } = require("mongoose");

const lineSchema = new mongoose.Schema({
  value: { type: Number }
});

const Line = mongoose.model("line", lineSchema);

module.exports = Line;
