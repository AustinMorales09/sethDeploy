const router = require('express').Router();
const Product = require('../models/Product');

router.route('/').get((req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch((err) => console.log(err));

});


router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = Number(req.body.price);

    const newProduct = new Product({
        name,
        description,
        price

    });

    newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;

