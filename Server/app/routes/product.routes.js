module.exports = app => {
    const products = require("../controllers/products.controller");
  
    var router = require("express").Router();
  
    // Create a new Movie
    router.post("/", products.create);
  
    // Retrieve all moviess
    router.get("/", products.findAll);

    // find by title
    // router.get("/", movies.findAll);
    router.get("/", products.findByTitle);
    router.get("/title", products.findByTitle);  
  
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