const express=require('express');
const routes=express.Router();
const {getAnimals,postAnimal,delAnimal,getAnimal}=require('../controllers/dataController');

routes.get('/',getAnimals).post('/',postAnimal);
routes.get('/:id',getAnimal).delete('/:id',delAnimal);

module.exports=routes;