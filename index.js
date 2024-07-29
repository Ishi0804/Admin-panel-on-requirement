const express = require("express");
const { router } = require("./routers/user.router");
const { database } = require("./config/database");
const cookies = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const { localAuth } = require("./middleware/user.Auth");
const { p_router } = require("./routers/product.router");
const cat_router = require("./routers/category.router");
const { sub_create } = require("./controllers/subcategory.controller");
const sub_router = require("./routers/subCategory.router");
const extraCat_router = require("./routers/extracategory.router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(cookies());

localAuth(passport);

app.use(session({ secret: "private-key" }));
app.use(passport.initialize());
app.use(passport.session());




app.use(express.json());
app.use(router);
app.use('/product',p_router);

app.use('/category',cat_router);
app.use('/subCategory',sub_router);
app.use('/extra',extraCat_router)

app.listen(8081, (err) => {
  database();
  if (!err) {
    console.log("server start: http://localhost:8081");
  }
});
