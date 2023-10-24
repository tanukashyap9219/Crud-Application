import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const navigate = useNavigate()

    const[store,update] = useState({
        name:"",
        age:"",
        email:""
    })
const getInput=(e)=>{
  // console.log(e.target.name)
  update({ ...store,[e.target.name]:e.target.value})
}
const handleSubmit=async(e)=>{
  e.preventDefault()
try{
//  await axios.post("https://6440c0c1fadc69b8e071c795.mockapi.io/crud",store)
 await axios.post("http://localhost:5000/post-data",store)
 navigate('/')
 update({
  name:"",
  age:"",
  email:""
 })
}
catch(error){
  console.log(error)
}
}    


  return (
    <>
    <div className='text-center'><h3>Create</h3></div>
      <form className='row' onSubmit={(e)=>handleSubmit(e)}>
        <div className='col-5 ms-auto me-auto'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="htmlForm-label">Name</label>
            <input name='name' value={store.name} type="text" className="form-control" id="exampleInputEmail1"  onChange={(e)=>getInput(e)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="htmlForm-label">Age</label>
            <input name='age' value={store.age} type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>getInput(e)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email</label>
            <input name='email' value={store.email} type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>getInput(e)}/>
          </div>


          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
  
    </>
  )
}

export default Create