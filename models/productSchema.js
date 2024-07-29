const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  image: String,
  productname: String,
  productprice: Number,
  description: String,
  subCategoryId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "subCategory"
},
extraCategoryId : {
  type : mongoose.Schema.Types.ObjectId,
  ref : "extraCatTbl"
},
CatgoryId:{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'category'
}
});

const ProductDB = mongoose.model("ProductTbl", ProductSchema);

module.exports = ProductDB;
