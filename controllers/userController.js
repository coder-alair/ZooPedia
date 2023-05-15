const {User}=require('../models/userSchemas');
const {hashPwd}=require('../utils/hashPwd');

async function getUsers(req,res){
    const users=await User.find().lean();
    res.send(users);
}

async function postUser(req,res){
    const usr=({
        name:req.body.name,
        password:req.body.password,
        mobile:req.body.mobile
    });
    const already=await User.find({name:req.body.name});
    if(already) return res.send('Username Already Exists');
    const hashed=await hashPwd(usr);
    const user=new User({
        name:req.body.name,
        password:hashed,
        mobile:req.body.mobile
    })

    const result=await user.save();
    res.send(result);
}

async function updateUser(req,res){
    await User.updateOne({_id:req.params.id},{
        $set:{
            name:req.body.name,
            mobile:req.body.mobile
        }
    });
    res.send("User Updated");
}

async function delUser(req,res){
    await User.deleteOne({_id:req.params.id});
    res.send('Delete Successfully');
}

module.exports={getUsers,postUser,updateUser,delUser};