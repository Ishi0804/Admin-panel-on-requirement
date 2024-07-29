const categoryModel = require("../models/categorySchema")


const cat_create = async (req,res)=>{
    try {
        let cat = await categoryModel.create(req.body);
        res.send(cat);
    } catch (error) {
        res.send(error.message);
    }
}

const updateData = async(req,res)=>{
    let{id} = req.params;
    let cat = await categoryModel.findById(id);
    cat.subCategoryId = req.body.subId;
    cat.save();
    res.send(cat);
}

const getData = async (req,res)=>{
    let data = await categoryModel.find().populate("subCategoryId");
    res.send(data);
}


module.exports = {cat_create, updateData, getData}

