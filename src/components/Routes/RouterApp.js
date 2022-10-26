import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import { AboutMe } from '../navegation/AboutMe'
import { Contact } from '../navegation/Contact'
import { Design } from '../navegation/Design'
import { HomePage } from '../navegation/HomePage'
import { TrainingCode } from '../navegation/TrainingCode'
import { WebProjects } from '../navegation/WebProjects'

export const RouterApp = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/aboutme' element={<AboutMe/>}/>
              <Route path='/webProjects' element={<WebProjects/>}/>
              <Route path='/design' element={<Design/>}/>
              <Route path='/trainingCode' element={<TrainingCode/>}/>
              <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  )
}
