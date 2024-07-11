const mongoose = require('mongoose'); 
const path = require('path')

const {Schema }  = mongoose

const ItemSchema = new Schema ({
    name : {
        type : String, 
        required : true   
    },
    price : {
        type : Number, 
        required : true,   
    }, 
    description : {
        type : String, 
        required : true
    }, 
    brand : {
        type : String, 
        required : true,
    },
    imgUrl: {
        type : String, 
        required : true
    }, 
    
    category : {
        type : String, 
        required: true, 
        }
    
})

module.exports = mongoose.model('Item', ItemSchema); 
