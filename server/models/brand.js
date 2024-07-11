const { Schema } = require("mongoose");
const mongoose = require('mongoose')


const BrandSchema = new Schema({
    brand : {
        type : String, 
        required : true, 
    }, 
    category : {
        type : String, 
        required : true, 
    }
}); 


module.exports = mongoose.model('Brand', BrandSchema); 