const { model, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    code: String,
    category: String,
    name: String,
    description: String,
    expirationDate: Date,
    stock: Number,
    img: String,
  },
  {
    timestamps: true, // created_at, updated_at
  }
);

module.exports = model("Product", productSchema);
