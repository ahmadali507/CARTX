const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const Item = require('../../models/Item');
const verifyToken = require('../../middlewares/auth');
const Brand = require('../../models/brand');
const ItemRouter = express.Router();
require('dotenv').config();

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
});

// Multer storage configuration for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        format: async (req, file) => 'png', // supports promises as well
        public_id: (req, file) => req.body.name,
    },
});

// File filter function to check the file type
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images only! (jpeg, jpg, png, gif)');
    }
}

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
});

// Route to add a new item
ItemRouter.post('/additem', verifyToken, upload.single('image'), async (req, res) => {
    try {
        const { name, description, category, price, brand } = req.body;
        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: 'image'
        });
        
        const item = new Item({
            name,
            description,
            category,
            price,
            imgUrl: result.secure_url,
            brand,
        });

        const newBrand = new Brand({
            brand,
            category,
        });

        await newBrand.save();
        const savedItem = await item.save();

        return res.status(200).json(savedItem);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

// Route to get items by category
ItemRouter.get('/additem/:category', async (req, res) => {
    try {
        const category = req.params.category;
        if (category === 'all') {
            const allItems = await Item.find();
            return res.status(200).json({ items: allItems });
        }
        const requiredItems = await Item.find({ category: req.params.category });
        const requiredBrands = await Brand.find({ category: req.params.category });
        return res.status(200).json({ items: requiredItems, brands: requiredBrands });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

module.exports = ItemRouter;
