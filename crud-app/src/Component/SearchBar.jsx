import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SearchBar = () => {

    const [apidata,setapidata]=useState([])
    const [filterdata,setfilterdata]=useState([])
    const [searchquery,setSerachquery]=useState("")



    const fetchdata= async()=>{
        const {data}=await axios.get("https://6440c0c1fadc69b8e071c795.mockapi.io/crud")
        // console.log(data)
        setapidata(data)
    }

    useEffect(()=>{
        fetchdata()
    },[])

    useEffect(()=>{
        const filtered=apidata.filter(item=>item.name.includes(searchquery))
        setfilterdata(filtered)
        // console.log(filterdata)
    },[searchquery,apidata])

    
    const handleSearchChange=(e)=>{
        setSerachquery(e.target.value)
    }
  return (
    <>                                                                                                                                                                                              
                <h1 className='text-center'>CRUD APP</h1>
            <input type="text" value={searchquery} onChange={handleSearchChange} style={{ width: "300px" }} placeholder='Search data here' />
            <hr />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">AGE</th>
                        <th scope="col">EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterdata?.map((data, index) => {
                            return (
                                <>
                                    < tr key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.age}</td>
                                        <td>{data.email}</td>
                                        

                                    </tr>
                                </>
                            )
                        })
                    }

                </tbody>
            </table >
    
    
    
    
    </>
  )
}

export default SearchBar