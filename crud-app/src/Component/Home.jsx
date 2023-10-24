import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const Home = () => {
    const [apidata, setapidata] = useState()
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    let token = localStorage.getItem("token")

    const fetchdata = async () => {
        // const { data } = await axios.get("https://6440c0c1fadc69b8e071c795.mockapi.io/crud")
        const {data}  = await axios.get("http://localhost:5000/get-Data")
          console.log(data)
        setapidata(data)
    }
    // console.log(apidata)
    
    useEffect(() => {
        fetchdata()
    
    },[])

    const edit = (id)=>{
        navigate(`/edit/${id}`)
    }
    const deleteData = async(id)=>{
        const check = window.confirm("Are you sure to delete this?")
        if(check){
            // await axios.delete(`https://6440c0c1fadc69b8e071c795.mockapi.io/crud/${id}`)
            await axios.delete(`http://localhost:5000/delete-Data/${id}`)
            fetchdata()
        }
    }

    const checkUserAuth = async () =>{
        try {
            const {data} = await axios.get("", {
                headers:{
                    "Content-Type":"appliication/login",
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            })
            if (data.status === 200){
                navigate("/")
            }
        } catch (error) {
            if ([401, 403].includes(error.response.status)) {
                navigate("/")
            }
            
        }
    }

    const Auth = () =>{
        if (!token) {
            navigate("/")
        } else{
            setShow(true)
            checkUserAuth()
        }
    }

    useEffect(()=>{
        Auth()
    },[])


    return (
        <>
           {true && (<div>
             <h1 className ='text-center'>CRUD APP</h1>
            <button className ='btn btn-info' onClick ={()=>navigate('/create')}>Create</button>
            {/* <NavLink style={{float:"right", color:"red", border:"2px solid"}} to={"/logout"}>Logout</NavLink> */}
            <button className ='btn btn-warning' onClick ={()=>navigate('/task')}>Task</button>
            <NavLink style={{float:"right", color:"red", border:"2px solid", background:"red", borderRadius:"15%"}} to={"/logout"}><button className ='btn btn' onClick ={()=>navigate('/task')}>Logout</button></NavLink>


            <table className="table mt-5 ">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">age</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apidata?.map((data) => {
                            return (

                                <>

                                    <tr>
                                        <th scope='col'>{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.age}</td>
                                        <td>{data.email}</td>
                                        <td><button className='btn btn-info' onClick={()=>edit(data.id)}>Edit</button></td>
                                        <td><button className='btn btn-danger' onClick={()=>deleteData(data.id)}>Delete</button></td>
                                    </tr>

                                </>


                            )

                        })

                    }

                </tbody>
            </table>
            </div>)}





        </>
    )
}

export default Home