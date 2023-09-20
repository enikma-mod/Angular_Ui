module.exports = app => {
    const products = require("../controllers/products.controller");
  
    var router = require("express").Router();
  
    // Create a new Product
    router.post("/createProduct", products.create);
  
    // Retrieve all Products
    router.get("/getAllProducts", products.findAll);

    // find by product
    // router.get("/", products.findAll);
    router.get("/productName", products.findByName);
    router.get("/title", products.findByName);  
  
    // Retrieve all published productss
    router.get("/published", products.findAllPublished);
  
    // Retrieve a single products with id
    router.get("/:id", products.findOne);
  
    // Update a products with id
    router.put("/:id", products.update);
  
    // Delete a products with id
    router.delete("/:id", products.delete);
  
    // Delete all productss
    // router.delete("/", products.deleteAll);
  
    app.use('/api/products', router);
};