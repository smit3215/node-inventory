module.exports = app => {
    const products = require("../controllers/product.controller.js");
    var router = require("express").Router();
    router.post("/", products.create);
    router.get("/", products.findAll);
    router.get("/published", products.findAllPublished);

    app.use('/api/products', router);

};