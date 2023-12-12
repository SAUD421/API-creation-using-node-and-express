const express= require('express');
const app= express()
app.get('/',(req,res)=>
{
   res.send('NODE API')
})
app.listen(3000,()=>
{
    console.log('NODE API APP IS RUNNING ON PORT 3000')
})