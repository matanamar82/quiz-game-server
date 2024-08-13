const express=require('express');
const errorHandler=require('./src/utils/errorHandler');
const userRouter=require('./src/routes/userRoutes');
const app=express();


app.use(express.json());


//define routes
app.use('/user',userRouter);

//define error handler
app.use(errorHandler);

module.exports=app;