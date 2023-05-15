const {loginUser}=require('../controllers/loginController');
const express=require('express');
const routes=express.Router();

routes.post('/',loginUser);

module.exports=routes;