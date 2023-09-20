// const db = require("../models/product.model.js");
const Product = require("../models/product.model.js");

// Create and Save a new Product
// @POST
exports.create = (req, res) => {
  // Validate request
  if (!req.body.plant_Name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }


  const product = new Product({
    plant_Name: req.body.plant_Name,
    plant_Description: req.body.plant_Description,
    plant_Price: req.body.plant_Price,
    image_link1: req.body.image_link1,
    image_link2: req.body.image_link2,
    plant_care: req.body.plant_care
  });

  // Save Product in the database
  product
    .save()
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

// Retrieve all Products from the database.
// @Get
exports.findAll = (req, res) => {
    const plant_Name = req.query.plant_Name;
    const condition = plant_Name ? { plant_Name: { $regex: new RegExp(plant_Name), $options: "i" } } : {};
  
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
// @GET by id
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
//@GET by namr
exports.findByName = (req, res) => {
  const plant_Name = req.query.plant_Name;

  Product.findOne( plant_Name)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Product with name " + plant_Name });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Product with title=" + plant_Name });
    });
};


// Update a Movie by the id in the request
// @PUT
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
// @ DELETE
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