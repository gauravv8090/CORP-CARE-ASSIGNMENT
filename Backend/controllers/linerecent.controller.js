const Linerecent = require("../models/linerecent.model.js");


const linerecentdata = async (req, res) => {
  
    let data = await Linerecent.find();

    return res.status(200).send({
        status: "success",
        data,
      });


};

module.exports = linerecentdata;
