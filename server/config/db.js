//this file contains all mongoDB related connections
const mongoose = require('mongoose');//require helps you to invoke the package
const config =require('config');
const db=config.get('mongoURI');

//this function will connect this API to Database
//telling compiler to run this function asynchronously
const connectDB=async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true, //warning ghalavnya sathi
            useCreateIndex: true,
            useUnifiedTopology: true,
          });
          console.log('MongoDB connected');//tab tak await karna hai jab tak mongoose connect na hojae
    }
    catch(err){
        console.log(err.message);
    //exit process with failure
    process.exit(1);
    }    
}

module.exports = connectDB;//this current file can be used outside anywhere because we exported it


