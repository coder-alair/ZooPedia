const {Data}=require('../models/dataSchemas');

async function getAnimals(req,res){
    const animals=await Data.find().lean();
    res.send(animals);
}

async function getAnimal(req,res){
    const animal=await Data.findOne({_id:req.params.id});
    res.send(animal);
}


async function postAnimal(req,res){
    const animal=new Data({
        animalName: req.body.animalName,
        headLine: req.body.headLine,
        character: [req.body.character],
        about:req.body.about,
        habitat:req.body.habitat,
        prey:req.body.prey,
        image:req.body.image
    });
    const result=await animal.save();
    res.send(result);
}

async function delAnimal(req,res){
    await Data.deleteOne({_id:req.params.id});
    res.send("Deleted Successfully");
}


module.exports={getAnimals,postAnimal,delAnimal,getAnimal};

