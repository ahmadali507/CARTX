const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const port = 8000;
const app = express();
const cookieParser = require('cookie-parser'); 
////////////////////////R            ROutees           ////////////////////////////////////////////


const SignIn = require('./routes/auth/SignIn')
const register = require('./routes/auth/Register')
const forgetPassRoute = require('./routes/auth/ForgetPassword')
const ItemRouter = require('./routes/items/ItemRoute');



app.use(cookieParser()); 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.use('auth',  register, SignIn, forgetPassRoute); 
app.use('/api', ItemRouter);

const CONNECTION_URL = "mongodb://localhost:27017/";

mongoose.connect(CONNECTION_URL).then(() => {
    console.log("DATABASE connected successfully");
}).catch((e) => {
    console.log("Database not connected. " + e);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
