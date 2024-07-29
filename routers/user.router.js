const { Router } = require("express");
const {
  home,
  signup,
  update,
  deletedata,
  indexPage,
  formPage,
  tablepage,
  signupPage,
  login,
  loginPage,
  logout,
  local,
  profile,
  changepassword,
  changepasswordPage,
  resetPassword,
  verify,
} = require("../controllers/user.controller");
const { userAuth, isAuth, localAuth } = require("../middleware/user.Auth");
const passport = require("passport");
const router = Router();

router.get("/", isAuth, indexPage);
router.get("/form-basic", formPage);
router.get("/tables", tablepage);
router.get("/data", home);

router.post("/signup", userAuth, signup);
router.get("/signup", signupPage);

router.patch("/update/:id", update);
router.delete("/delete/:id", deletedata);

router.post("/login", login);
router.get("/login", loginPage);

router.get("/logout", logout);

router.post(
  "/local",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

router.get("/profile",isAuth,profile)
router.get("/changepassword",isAuth,changepassword)
router.post("/changepassword",isAuth,changepasswordPage)

router.post("/forget",resetPassword)
router.post("/verify",verify)
module.exports = { router };
