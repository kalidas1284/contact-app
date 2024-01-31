//Backend Logics

//import db.js
const db=require('../Services/db')

//get all the employee details
const getAllEmployee=()=>{
    return db.contact.find().then((result)=>{//details of emploee
        if(result){
                return{//send to front end 
                    statuscode:200,
                    contacts:result
                }
        }
        else{
                return{
                    statuscode:404,
                    message:'cant find details'
                }
        }

    })
}

const addEmployee=(id,geolocation,firstname,city,street,zipcode,number,email,username,password,lastname,phone)=>{
    return db.contact.findOne({id}).then((result)=>{
        if(result){// if the contact already exist
            return{
                statuscode:404,
                message:"Contacct already exist"
            }
        }
        else{//the id  is not in the database the it want to save in the database
          const newContact= new db.contact({id,geolocation,firstname,city,street,zipcode,number,email,username,password,lastname,phone})
          //to save to the databse
          newContact.save()
          return{
            statuscode:200,
            message:"Contact Added Succesfully"
          }
        }
    })
}


//get a particular employee from database
const getAnContact=(id)=>{
    return db.contact.findOne({id}).then((result)=>{//details of emploee
        if(result){
                return{//send to front end 
                    statuscode:200,
                    contacts:result
                }
        }
        else{
                return{
                    statuscode:404,
                    message:'cant find details'
                }
        }

    })

}

const deleteContact=(id)=>{
    return db.contact.deleteOne({id}).then((result)=>{
        return{
            statuscode:200,
            message:"Contact deleted Sucesfully"
        }
    })
    .catch((error)=>{
        return{
            statuscode:404,
            message:"can't find contact"
        }
    })
}

//update an contact details
const updateContact=(id,name,address,email,street,zipcode,number,username,password,phone,)=>{//updated data
    return db.contact.findOne({id}).then((result)=>{
        if (result){
            //assinging updated infromation to the database values
            result.id=id
            result.name=name
            result.email=email
            result.address=address
            result.street=street
            result.zipcode=zipcode
            result.number=number
            result.username=username
            result.phone=phone
            result.password=password
            //save updated details to db
            result.save()
            return{//send to frontend
                statuscode:200,
                message:"Data Updated"
            }
        }else{
            return{
                statuscode:404,
                message:"cannot update data "
            }
        }
    })
}


module.exports={
    getAllEmployee,
    addEmployee,
    getAnContact,
    deleteContact,
    updateContact
}