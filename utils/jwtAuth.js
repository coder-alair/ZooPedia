const jwt=require('jsonwebtoken');
const {authString}=require('../config/variables');

function jwtToken(getUser){
    const token=jwt.sign({name:getUser.name,_id:getUser._id,mobile:getUser.mobile},authString);
    return token;
}

module.exports={jwtToken};