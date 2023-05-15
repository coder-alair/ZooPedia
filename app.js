const express=require('express');
const cors=require('cors');
const {dbconn}=require('./db/dbconn');
const userRoutes=require('./routes/userRoute');
const loginRoutes=require('./routes/loginRoute');
const dataRoutes=require('./routes/dataRoute');

const app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userRoutes);
app.use('/login',loginRoutes);
app.use('/data',dataRoutes);

function start(){
    try{
        dbconn();
    }
    catch(e){console.log(e.message)};
}
start();

const port=process.env.PORT||8000;
app.listen(port,()=>console.log(`Listening on port ${port}`));