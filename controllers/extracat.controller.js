const extraCatModel = require("../models/extracategorySchema")

const extra_create = async(req,res)=>{
    try {
        let extraCat = await extraCatModel.create(req.body);
        res.send(extraCat);
    } catch (error) {
        res.send(error.message)
    }
};

module.exports = {extra_create}