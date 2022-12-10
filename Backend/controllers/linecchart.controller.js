const Line = require("../models/linechart.model.js");


const linedata = async (req, res) => {
  
    let data = await Line.find();

    return res.status(200).send({
        status: "success",
        data,
      });


};

module.exports = linedata;
