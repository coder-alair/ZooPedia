const bcrypt=require('bcrypt');

async function hashPwd(usr){
    const salt=10;
    return bcrypt.hash(usr.password,salt);
}

async function decodePwd(user,getUser){
    return bcrypt.compare(user.password, getUser.password);
}

module.exports={hashPwd,decodePwd};