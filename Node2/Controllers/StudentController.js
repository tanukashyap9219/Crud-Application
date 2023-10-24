const { where } = require("sequelize")
const {Student} = require("../models")
const student = require("../models/student")


const getData = async (req, res) => {
    try {
        const students = await Student.findAll({})
        res.send(students)
        
    } catch (error) {  
      console.log(error) 
    }
    
   
}

const postData = async (req, res) => {
    try {
        console.log(req.body)
        const {name, age, email} = req.body
        const students = await Student.create({
            name,
            age,
            email
            
        })
        res.send({message:"data inserted successfully.."})
        
    } catch (error) {  
    console.log(error) 
    }   
}

const updateData = async (req, res) => {
    try {
        const {name, age, email} = req.body
        const student = await Student.update({
            name,
            age,
            email,
        },{
            where:{
                id:req.params.id
            }
        })
    res.send({message:"data updated successfully"})
        
    } catch (error) {
        console.log(error)
        
    }
}

const deleteData = async (req, res) => {
    try {
        const student = await Student.destroy({
            where:{
                id:req.params.id
            }
        })
        res.send({message:"data deleted successfully..."})
        
    } catch (error) {
        console.log(error)
    }
}

const singleData = async (req, res) =>{
    try {
        const student = await Student.findByPk(req.params.id)
        res.send({message:"data retrived successfully..", data:student})
        
    } catch (error) {
        console.log(error)
        
    }
    
}

module.exports = {getData, postData, updateData, deleteData, singleData}