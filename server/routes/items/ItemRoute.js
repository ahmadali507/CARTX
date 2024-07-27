const express = require('express');
const path = require('path');
const multer = require('multer');
const Item = require('../../models/Item');
const verifyToken = require('../../middlewares/auth')
const Brand = require('../../models/brand')
const cloudinary = require('cloudinary').v2
require('dotenv').config();

const ItemRouter = express.Router();

cloudinary.config({
    cloud_name : process.env.CLOUD_NAME, 
    api_key : process.env.CLOUD_KEY, 
    api_secret : process.env.CLOUD_SECRET, 
})


// // Multer storage configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, '../../uploads'));
//     },
//     filename: (req, file, cb) => {
//         const ext = path.extname(file.originalname);
//         cb(null, req.body.name + ext); // Append the original file extension
//     }
// });

// File filter function to check the file type
// const upload = multer({
//     storage: storage,
//     fileFilter: function(req, file, cb) {
//         checkFileType(file, cb);
//     }
// });

// function checkFileType(file, cb) {
//     const filetypes = /jpeg|jpg|png|gif/;
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = filetypes.test(file.mimetype);

//     if (mimetype && extname) {
//         return cb(null, true);
//     } else {
//         cb('Error: Images only! (jpeg, jpg, png, gif)');
//     }
// }

// Route to add a new item
ItemRouter.post('/additem',  verifyToken, async (req, res, next) => {


  const result = await cloudinary.uploader.upload(req.file.path, {
    resource_type : 'image'    
   })
    try {
        console.log(req.body)
        console.log(req.file)
        const { name, description, category, price , brand} = req.body;
        // const imgUrl = `/uploads/${req.file.filename}`; // Relative URL
    //    console.log(imgUrl)
        const item = new Item({
            name,
            description,
            category,
            price,
            imgUrl : result.secure_url, 
            brand,
        });

        const newBrand = new Brand({
            brand, 
            category,
        })

        const savedBrand =  await newBrand.save(); 
        console.log(savedBrand); 
        const savedItem = await item.save();
        console.log(savedItem); 
        return res.status(200).json(savedItem);
    } catch (err) {
        console.log("some error occured")
        return res.status(400).json({ error: err.message });
    }
});

// Route to get items by category
ItemRouter.get('/additem/:category', async (req, res) => {
    try {
        const category = req.params.category; 
        if(category === 'all'){
            const allItems = await Item.find(); 
            console.log(allItems)
            return res.status(200).json({items : allItems});
        }
        else {

            const requiredItems = await Item.find({ category: req.params.category });
            const requiredBrands = await Brand.find({category : req.params.category}); 
            return res.status(200).json({items : requiredItems, brands : requiredBrands});
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});


module.exports = ItemRouter;
