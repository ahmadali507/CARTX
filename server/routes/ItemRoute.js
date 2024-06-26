const express = require('express')
const path = require('path')
const Item = require('../models/Item')
const ItemRouter = express.Router(); 
const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
          cb(null, path.join(_dirname, '../uploads'))
    }, 
    filename: (req, file, cb) =>{
        cb(null, req.body.name)
    }
})


const upload = multer({storage : storage}); 


ItemRouter.post('/additem', upload.single('photo'), async(req, res, next) =>{
   try{
    const {name, description, category, price} = req.body; 
    const imageUrl = req.body.file;
    const item = new Item({
        name, 
        description, 
        category, 
        price, 
        imageUrl
    })
      
    const savedItem = await item.save(); 
    return res.status(200).json(savedItem); 
    
   }
   catch(err){
    return res.status(400).json({error : err.message})
   }
})

ItemRouter.get('/additem/:category', async (req, res) =>{
    try{
        const requiredItems = await find({category : req.params.category}); 
        return res.status(200).json(requiredItems);
    }
    catch(error){
        return res.status(400).json({error : error.message}); 
    }
})

module.exports = ItemRouter