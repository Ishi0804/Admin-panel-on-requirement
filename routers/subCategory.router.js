const {Router} = require("express");
const { sub_create, getData } = require("../controllers/subcategory.controller");


const sub_router = Router();

sub_router.post('/create',sub_create)
sub_router.get('/data',getData)


module.exports = sub_router