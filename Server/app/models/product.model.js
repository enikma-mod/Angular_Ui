// module.exports = mongoose => {
//     const Product = mongoose.model(
//       "products",
//       mongoose.Schema(
//         {
//           plant_Name: String,
//           plant_Description: String,
//           plant_Price: Number,
//           image_link1: String,
//           image_link2: String,
//           plant_care: String,
          
//         },
//       )
//     );
//     return Product;
// };

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  plant_Name: String,
  plant_Description: String,
  plant_Price: Number,
  image_link1: String,
  image_link2: String,
  plant_care: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

