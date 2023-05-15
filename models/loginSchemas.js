const mongoose=require('mongoose');

const loginSchema=new mongoose.Schema({
    name:{type:String,require:true},
    password:{type:String,require:true}
});

const Login=mongoose.model("Login",loginSchema);

module.exports={Login};







