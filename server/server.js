const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const port = 8000; 


const app = express(); 

app.use(cors())
app.use(express.json()); 

 const CONNECTION_URL = "mongodb://localhost:27017/"
app.listen(port , () =>{
    console.log(`Server is running on port ${port}`)
})


mongoose.connect(CONNECTION_URL).then(() =>{
    console.log("DATABASE coneected successfully")
})
.catch((e) =>{
   console.log("Database not connected." + e)
})