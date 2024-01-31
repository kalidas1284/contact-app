//7 connecting to database through mongoose (node+mongodb connection)
//connection code for node and mongodb
//import mongoose

const mongoose=require('mongoose')

//connection string
mongoose.connect('mongodb://localhost:27017/app')

const contact=mongoose.model('contact',{
    
id:String,
name:String,
address:String,
email:String,
street:String,
zipcode:String,
username:String,
password:String,
number:String,
phone:String,
    
})

module.exports={
     contact
}