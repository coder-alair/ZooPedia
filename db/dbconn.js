const mongoose=require('mongoose');
const {dbString}=require('../config/variables');

function dbconn(){
    return mongoose.connect(dbString).then(()=>{console.log("Connected to Database")}).catch(e=>console.log(e.message));
}

module.exports={dbconn};

