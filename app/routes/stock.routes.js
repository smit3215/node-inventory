module.exports = app => {
    const stocks = require("../controllers/stock.controller.js");
    var router = require("express").Router();
    router.post("/", stocks.create);
    router.get("/", stocks.findAll);
    router.get("/published", stocks.findAllPublished);
    router.put("/:id", stocks.update);
    router.delete("/:id", tutorials.delete);

    app.use('/api/stocks', router);

};