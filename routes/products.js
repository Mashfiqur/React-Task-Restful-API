"use strict"
const express = require('express');
const router = express.Router();
const checkUser = require('../app/middlewares/authFinder');

const ProductController =  require('../app/controllers/ProductController');


router.post('/', checkUser, ProductController.create_product);

router.get('/', checkUser, ProductController.get_all_products);

router.get('/:productId', checkUser, ProductController.get_product);

router.patch('/:productId', checkUser, ProductController.update_product);

router.delete('/:productId', checkUser, ProductController.remove_product);



module.exports = router;