import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    const [input,setInput] = useState({
      name:"",
      age:"",
      email:""
    })

const {id} = useParams()
  const fetchSingleData = async()=>{
      // const {data}=await axios.get(`https://6440c0c1fadc69b8e071c795.mockapi.io/crud/${id}`)
      const {data} = await axios.get(`http://localhost:5000/single-Data/${id}`,input)
      console.log(data)
      setInput(data.data)
  }
  useEffect(()=>{
    fetchSingleData()
  },[])

  const navigate = useNavigate()

  const getInput = (e) =>{
    // console.log(e.target.value)
    setInput({ ...input, [e.target.name]: e.target.value })

  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      // await axios.put(`https://6440c0c1fadc69b8e071c795.mockapi.io/crud/${id}`,input)
      await axios.put(`http://localhost:5000/update-Data/${id}`,input)
      navigate('/')
      setInput({
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
    <div className='text-center'><h3>Edit</h3></div>
      <form className='row' onSubmit={(e)=>handleSubmit(e)}>
        <div className='col-5 ms-auto me-auto'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="htmlForm-label"> Full Name</label>
            <input value={input.name} onChange={(e)=>getInput(e)} name='name' type="text" className="form-control" id="exampleInputEmail1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="htmlForm-label">Age</label>
            <input value={input.age} onChange={(e)=>getInput(e)} name='age' type="text" className="form-control" id="exampleInputEmail1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email</label>
            <input value={input.email} onChange={(e)=>getInput(e)} name='email' type="text" className="form-control" id="exampleInputEmail1" />
          </div>


          <button type="submit" className="btn btn-info">Update</button>
        </div>
      </form>
    
    
    
    
    
    
    </>
  )
}

export default Edit