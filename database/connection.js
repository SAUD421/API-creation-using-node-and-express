const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:12345eddy@cluster0.yrafyko.mongodb.net/Node API?retryWrites=true&w=majority/Node")
.then(()=>{
    console.log("Connected to the database ");
}).catch((error)=>{
    console.log("Connection error ");
})
