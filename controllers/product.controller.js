const categoryModel = require("../models/categorySchema");
const extraCatModel = require("../models/extracategorySchema");
const ProductDB = require("../models/productSchema");
const subCategoryModel = require("../models/subCategorySchema");


const addProduct = async (req, res) => {
  let data = await ProductDB.create(req.body);
  return res.redirect("back");
};

const deleteData = async (req, res) => {
  try {
    const {id} = req.params
    // console.log(id);
    await ProductDB.findByIdAndDelete(id);
    return res.redirect("/product");
  } catch (error) {
    console.log(error);
  }
};

const editData = async (req, res) => {
    try {
      const {id} = req.params
      console.log(id);
      await ProductDB.findByIdAndUpdate(id,{});
      return res.redirect("/product");
    } catch (error) {
      console.log(error);
    }
  };
  

const product = async (req, res) => {
  let data = await ProductDB.find({});
  let cat = await categoryModel.find();
  let subcat = await subCategoryModel.find();
  let extracat = await extraCatModel.find();
  return res.render("product", { data , cat, subcat, extracat});
};

const getData = async (req, res) => {
  let data = await ProductDB.find({});
  res.send(data);
};

module.exports = { product, getData, addProduct, deleteData, editData };
