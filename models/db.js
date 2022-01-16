const  mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser:true,useUnifiedTopology: true}, (err)=>
{
    if(!err)
    {
         console.log('Connection Successfull with mongoDB');
    }
    else
    {
        console.log('Connection Not Successfull with mongoDB'+ err);
    }
});

require('./employee.model');