//1. import express
const express=require('express')

//2. import cors
const cors=require('cors')

//3. create a backend application using express
const conServer=express()

//import logic 
const logic=require('./Services/logic')

//4. connecting backend to front end
conServer.use(cors({
    origin:'http://localhost:3000'
}))

//5 converting json to js and js to json(middilware)
conServer.use(express.json())

//6. define the port number
conServer.listen(8000,()=>{
    console.log("Con server Listening on the port 8000");
})

//API call for get all employee details
conServer.get('/get-all-contacts',(req,res)=>{
    logic.getAllEmployee().then((response)=>{//all contact details
        res.status(response.statuscode).json(response)
    })
}) 

//API Call to add  an contact
conServer.post('/add-an-contact',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.address,req.body.email,req.body.name,req.body.street,req.body.zipcode,req.body.number,req.body.username,req.body.password,req.body.phone).then((response)=>{
        res.status(response.statuscode).json(response);
    })
})

conServer.get('/get-an-contacts/:id',(req,res)=>{
    logic.getAnContact(req.params.id).then((response)=>{//all contact details
        res.status(response.statuscode).json(response)
    })
})  

conServer.delete('/delete-an-contact/:id',(req,res)=>{
    logic.deleteContact(req.params.id).then((response)=>{
        res.status(response.statuscode).json(response)
    })
})

conServer.post('/update-an-contacts/:id',(req,res)=>{
    logic.updateContact(req.params.id,req.body.address,req.body.email,req.body.name,req.body.street,req.body.zipcode,req.body.number,req.body.username,req.body.password,req.body.phone).then((response)=>{//all contact details
        res.status(response.statuscode).json(response)
    })
})  