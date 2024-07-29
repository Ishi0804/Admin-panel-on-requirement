const mongoose = require('mongoose');

const extraCatSchema = new mongoose.Schema({
    name : String
});

const extraCatModel = mongoose.model('extraCatTbl', extraCatSchema);

module.exports=extraCatModel;