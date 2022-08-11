const moongose=require('mongoose');

//connecting to mongoDB Atlas 
moongose.connect('mongodb+srv://mayurDB:Hello123db@prograd.vwimi.mongodb.net/newDB1?retryWrites=true&w=majority')
.then(ok=>console.log("Connected to MongoDB "))
.catch(err=>console.log("Failed to Connect to MongoDB",err))
module.exports=moongose;