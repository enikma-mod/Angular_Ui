const db = require("../models");
const Product = db.products;

// Create and Save a new Movie
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }


  const product = new Product({
    plantName: req.body.plantName,
    plantDescription: req.body.plantDescription,
    plantPrice: req.body.plantPrice,
    image_url1: req.body.image_url1,
    image_url2: req.body.image_url2,
    image_url3: req.body.image_url3
  });

  // Save Product in the database
  product
    .save(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    });
};

// Retrieve all Movies from the database.
exports.findAll = (req, res) => {
    const plantName = req.query.plantName;
    var condition = plantName ? { tiplantNametle: { $regex: new RegExp(plantName), $options: "i" } } : {};
  
    Product.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Movies."
        });
    });
};

// Find a single Movie with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

  Product.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Product with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Product with id=" + id });
    });
};

//find by Title
exports.findByTitle = (req, res) => {
  const plantName = req.query.plantName;

  Movie.findOne( title)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Product with title " + plantName });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Product with title=" + plantName });
    });
};


// Update a Movie by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Product with id=${id}. Maybe Product was not found!`
            });
          } else res.send({ message: "Product was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Product with id=" + id
        });
    });
};

// Delete a Movie with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Product.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Product with id=${id}. Maybe Movie was not found!`
        });
      } else {
        res.send({
          message: "Product was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id
      });
    });
};

// Delete all Movies from the database.
// exports.deleteAll = (req, res) => {
//     Movie.deleteMany({})
//     .then(data => {
//       res.send({
//         message: `${data.deletedCount} Movies were deleted successfully!`
//       });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all Movies."
//       });
//     });
// };

// Find all published Movies
exports.findAllPublished = (req, res) => {
    Product.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products."
      });
    });
};