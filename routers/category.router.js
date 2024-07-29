const {Router} = require("express");
const { cat_create, updateData, getData } = require("../controllers/category.controller");

const cat_router = Router();

cat_router.post('/create',cat_create)
cat_router.patch('/update/:id',updateData)
cat_router.get('/data',getData)


module.exports = cat_router