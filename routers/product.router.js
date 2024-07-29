const { Router } = require("express");
const {addProduct, product, getData, deleteData, editData } = require("../controllers/product.controller");

const p_router = Router();

// p_router.get('/',productPage);
p_router.get('/',product)
p_router.get('/data',getData)
p_router.post('/addProduct',addProduct)
p_router.delete('/delete/:id',deleteData)
p_router.patch('/update/:id',editData)


module.exports={p_router} 
