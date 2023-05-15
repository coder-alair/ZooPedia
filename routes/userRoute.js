const express=require('express');
const routes=express.Router();
const {getUsers,postUser,updateUser,delUser}=require('../controllers/userController');

routes.get('/',getUsers).post('/',postUser);
routes.put('/:id',updateUser).delete('/:id',delUser);

module.exports=routes;