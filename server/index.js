const express = require('express');
const connectDB = require('./config/db');
const app = express();//included all the packages

//lets connect database
connectDB();

//initializing Parser Old= body parser, New= express khudka parser diya hai
app.use(express.json());
app.use('/entermoney',require('./routes/coinInput'));
app.use('/selectdrinks',require('./routes/drinks'));
app.use('/pickup',require('./routes/calculation'));
app.use('/refresh',require('./routes/refresh'));
app.use('/addmoney',require('./routes/addmoney'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

