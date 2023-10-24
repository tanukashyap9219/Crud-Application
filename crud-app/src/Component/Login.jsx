import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, NavLink } from 'react-router-dom'

const Login = () => {
    const [input, setInput] = useState({
        // name:"",
        // email:"",
        // password:""
    })
    const navigate = useNavigate()
    const getInput = (e) =>{
        // console.log(e.target.name)
        // console.log(e.target.value)
        setInput({...input, [e.target.name]: e.target.value})

    }

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(input)
        try {
            const {data} =  await axios.post("http://localhost:5000/user-login", input)
            // const data =  await axios.post("http://localhost:5000/user-signup", input)
            console.log(data)
            if(data.status === 200){
                navigate("/")
            }
            if(data.status === 400){
                alert(data.message)
            }
        } catch (error) { 
            alert(error.response)
            
        }
    }
    return (
        <>
            <div><h2 className='row justify-content-center'>User Login</h2></div>
            <form onSubmit={(e) => handleSubmit(e)} className='row justify-content-center'>
                <div className='col-5' >

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email Address</label>
                    <input type="email" name='email' class="form-control" id="exampleInputPassword1" onChange={(e) => getInput(e)} />
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name='password' class="form-control" id="exampleInputPassword1" onChange={(e) => getInput(e)} />
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
                <button style={{marginLeft:"470px", color:"white"}} className='btn btn-success'><NavLink style={{float:"right", color:"white", textDecorationLine:"None"}} to={"/user-signup"}>SignUp</NavLink></button>

                </div>
            </form>
        </>
    )
}

export default Login