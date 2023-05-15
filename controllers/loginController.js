const { Login } = require("../models/loginSchemas");
const { User } = require("../models/userSchemas");
const { jwtToken } = require("../utils/jwtAuth");
const{decodePwd}=require('../utils/hashPwd');


async function loginUser(req, res) {
  const user = new Login({
    name: req.body.name,
    password: req.body.password,
  });
  if (!req.body.name || !req.body.password)
    return res.send("Please Enter Username and Password");
  const getUser = await User.findOne({ name: req.body.name });
  if(!getUser) return res.status(404).send('Username Not Found');
  const pwd =await decodePwd(user, getUser);
  if(pwd){
      const token=jwtToken(getUser);
      res.status(200).header('x-auth-token',token).send(token);
  }
  if(!pwd){
      res.status(400).send('Wrong Password');
  }
}

module.exports = { loginUser };
