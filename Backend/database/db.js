

const mongoose = require('mongoose');


const connect = ()=>{
    console.log("done");
    return mongoose.connect(
        "mongodb+srv://gauravv8090:gauravv8090@cluster0.ua16jmd.mongodb.net/?retryWrites=true&w=majority"
    );
};


module.exports = connect;