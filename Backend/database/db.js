

const mongoose = require('mongoose');


const connect = ()=>{
    console.log("done");
    return mongoose.connect(
        " mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0"
    );
};


module.exports = connect;