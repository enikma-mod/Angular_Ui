module.exports = mongoose => {
    const Product = mongoose.model(
      "product",
      mongoose.Schema(
        {
          plant_Name: String,
          plant_Description: String,
          plant_Price: Number,
          image_url1: String,
          image_url2: String,
          image_url3: String,
        },
      )
    );
    return Product;
};
