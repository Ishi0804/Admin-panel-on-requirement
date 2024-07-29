
const subCategoryModel = require("../models/subCategorySchema");


const sub_create = async (req,res)=>{
    try {
        let subCat = await subCategoryModel.create(req.body);
        res.send(subCat);
    } catch (error) {
        res.send(error.message);
    }
}

const getData = async (req,res)=>{
   let data = await subCategoryModel.find()
   res.send(data)
}


module.exports = {sub_create, getData}

