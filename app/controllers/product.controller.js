const db = require("../models");
const Product = db.products;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // res.status(201).send({ message: "Smit!" });
    // return;
    // // Validate request
    // if (!req.body.title) {
    //   res.status(400).send({ message: "Content can not be empty!" });
    //   return;
    // }
  
    // Create a Tutorial
    const product = new Product({
      name: req.body.name,
      code: req.body.code,
      imageUrl: req.body.imageUrl,

    });
  
    // Save Tutorial in the database
    product
      .save(product)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Product.",
        });
      });
      return;
  };

  // Retrieve all Tutorials from the database.
  exports.findAll = (req, res) => {
    const name = req.body.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Product.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products."
        });
      });
  };

  // Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Product.find({ published: true })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products.",
        });
      });
  };
  