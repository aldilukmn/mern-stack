import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Register, MainApp, DetailBlog, CreateBlog } from '../../pages'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<MainApp/>}>
              <Route path='create-blog'element={<CreateBlog/>}/>
              <Route path='detail-blog' element={<DetailBlog/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
