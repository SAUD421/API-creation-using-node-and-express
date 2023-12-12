const express= require('express');
const app= express()
const mongoose= require('mongoose')
app.get('/',(req,res)=>
{
   res.send('NODE API')
})
app.get('/blog',(req,res)=>
{
   res.send('NODE blog')
})
app.listen(3000,()=>
{
    console.log('NODE API APP IS RUNNING ON PORT 3000')
})
mongoose.
connect('mongodb+srv://admin:12345eddy@cluster0.yrafyko.mongodb.net/Node API?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to the database ')
})
.catch((error)=>
{
    console.log(error)
})