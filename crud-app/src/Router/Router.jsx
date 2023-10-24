import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Create from '../Component/Create'
import Edit from '../Component/Edit'
import SearchBar from '../Component/SearchBar'
import Todo from '../Component/Todo'
import Signup from '../Component/Signup'
import Login from '../Component/Login'
import Logout from '../Component/Logout'
// import Login from '../Component/Login'


const Router = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>            
            <Route path='/create' element={<Create/>}/>            
            <Route path='/edit/:id' element={<Edit/>}/>  
            <Route path='/search_bar' element={<SearchBar/>}/>
            <Route path='/todo' element={<Todo/>}/>
            <Route path='/user-signup' element={<Signup/>}/>
            {/* <Route path='/user-login' element={<Login/>}/> */}
            <Route path='/Login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>







            
        </Routes>    
    </BrowserRouter>

    </>
  )
}

export default Router