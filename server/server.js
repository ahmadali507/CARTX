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
const sendEmailRouter = require('./routes/contactus/sendEmail');
const PaymentRouter = require('./routes/payment/Stripe');


const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your production frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  };

app.use(cookieParser()); 
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
require('dotenv').config();



app.use('/auth',register,SignIn,forgetPassRoute); 
app.use('/api',ItemRouter);
app.use(sendEmailRouter); 
app.use(PaymentRouter); 

const CONNECTION_URL_AUTH = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL_AUTH).then(() => {
    console.log("DATABASE connected successfully");
}).catch((e) => {
    console.log("Database not connected. " + e);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
