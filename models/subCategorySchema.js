const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
    name : String,
    extraCategoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "extraCatTbl"
    }

})

const subCategoryModel = mongoose.model("subCategory",subCategorySchema);

module.exports = subCategoryModel;