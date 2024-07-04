const express = require('express');
const path = require('path');
const Item = require('../models/Item');
const ItemRouter = express.Router();
const multer = require('multer');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, req.body.name + ext); // Append the original file extension
    }
});

// File filter function to check the file type
const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb);
    }
});

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

// Route to add a new item
ItemRouter.post('/additem', upload.single('photo'), async (req, res, next) => {
    try {
        const { name, description, category, price } = req.body;
        const imageUrl = req.file.path;
        const item = new Item({
            name,
            description,
            category,
            price,
            imageUrl
        });

        const savedItem = await item.save();
        return res.status(200).json(savedItem);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

// Route to get items by category
ItemRouter.get('/additem/:category', async (req, res) => {
    try {
        const requiredItems = await Item.find({ category: req.params.category });
        return res.status(200).json(requiredItems);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

module.exports = ItemRouter;
