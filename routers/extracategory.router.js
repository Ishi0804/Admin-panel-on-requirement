const {Router} = require("express");
const { extra_create } = require("../controllers/extracat.controller");


const extraCat_router = Router();

extraCat_router.post('/create',extra_create)

module.exports = extraCat_router;