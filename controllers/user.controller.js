const userDB = require("../models/userSchema");
const nodemailer = require("nodemailer");

const home = async (req, res) => {
  let data = await userDB.find();
  res.send(data);
};

const signup = async (req, res) => {
  let data = await userDB.create(req.body);
  return res.redirect("/login");
};

const login = async (req, res) => {
  const { email, password } = req.body;

  let User = await userDB.findOne({ email: email });
  //   console.log("login con", User);
  if (User) {
    if (User.password === password) {
      //   console.log("pass ok");
      return res.redirect("/");
    }
    console.log("Wrong password....");
    return res.redirect("login");
  } else {
    console.log("Wrong email....");
    return res.redirect("login");
  }
};

const update = async (req, res) => {
  let { id } = req.params;
  console.log(id);
  try {
    let data = await userDB.findByIdAndUpdate(id, req.body);
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
const deletedata = async (req, res) => {
  let { id } = req.params;
  try {
    let data = await userDB.findByIdAndDelete(id, req.body);
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
const indexPage = (req, res) => {
  return res.render("index");
};
const formPage = (req, res) => {
  return res.render("form-basic");
};

const tablepage = async (req, res) => {
  try {
    let data = await userDB.find({});
    console.log(data);
    return res.render("tables", { data });
  } catch (error) {
    console.log(error);
  }
};

const loginPage = (req, res) => {
  return res.render("authentication-login");
};

const signupPage = (req, res) => {
  return res.render("authentication-register");
};
const logout = (req, res) => {
  res.clearCookie("user");
  res.redirect("/login");
};

const local = async (req, res) => {
  console.log(req.body);
  res.end();
};

const profile=(req,res)=>{
  let user=req.user;
  console.log(user);
  return res.render('profile',{user});
}

const changepassword = async(req,res)=>{
return res.render('changepassword');
}

const changepasswordPage = async(req,res)=>{
  const {oldpassword,newpassword,confirmpassword} = req.body;
  let {id} = req.user;
  let data = await userDB.findById(id);

  if(data.password === oldpassword){
    if(newpassword === confirmpassword){
      await userDB.findByIdAndUpdate(id,{password:newpassword});
      console.log("password change succsessfully.........");
      return res.redirect('/logout');
    }else{
      console.log("new password and confirm password is not match......");
      return res.redirect('/changepassword');
    }
  }else{
    console.log("worng old password");
    return res.redirect('/changepassword')
  }

  res.end();
}

let otp=Math.floor(100000+ Math.random() *900000)

const resetPassword=(req,res)=>{
  const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:"anghantaxa1210@gmail.com",
      pass:"zngb yrws rgbf tqmd"
    }
  })
  const mailerOption={
    from:"anghantaxa1210@gmail.com",
    to:req.body.email,
    subject:"Reset Password",
    html:`<h2>otp ${otp}</h2>`
  }
  transporter.sendMail(mailerOption,(err,info)=>{
    if(err){
      console.log(err);
    }else{
      console.log(info);
    }
    res.send('sending....')
  })
}

const verify = (req,res)=>{
  if(req.body.otp==otp){
    res.send("veriyd otp");
  }else{
   res.send("wrong otp");
  }
}

module.exports = {
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
  verify
};
