const express = require ('express')
const cors = require('cors');
const linedata = require('./controllers/linecchart.controller.js');
const linerecentdata = require('./controllers/linerecent.controller.js');
const connect = require('./database/db.js');


const app= express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{

   return res.send("hey there");

})
app.get("/line", linedata)
app.get("/recentline", linerecentdata)


connect().then(()=>{
    app.listen(8080, ()=>{
        console.log("Started");
    })
})

