import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { About } from '../Pages/About'
import { Services } from '../Pages/Services'
import { Ourwork } from '../Pages/Ourwork'
import { Portfolio } from '../Pages/Portfolio'
import { Contact } from '../Pages/Contact'
import { Error } from '../Pages/Error'
import Footer from '../Footer/Footer'


export const Allrout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/work' element={<Ourwork/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<Error/>} />
      <Route path='/footer' element={<Footer/>} />


    </Routes>
  )
}
