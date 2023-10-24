import React, { useState } from 'react'

const Todo=()=>{


    const [data,setData]=useState("")
    const[arr,setArr]=useState([])

    const addTodo=()=>{
      if(data.trim()!==""){
        setArr([...arr,data])
        setData("");
      }
    }

    const deleteTodo=(index)=>{
      const updateArr=[...arr];
      updateArr.splice(index,1);
      


    }

  return (
    <>    
    
    
    
    
    </>
  )

  }
export default Todo
