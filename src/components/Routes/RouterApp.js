import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import { AboutMe } from '../navegation/AboutMe'
import { Contact } from '../navegation/Contact'
import { Design } from '../navegation/Design'
import { HomePage } from '../navegation/HomePage'
import { TrainingCode } from '../navegation/TrainingCode'
import { SpidermanWebProject } from '../navegation/webProjectNavigation/SpidermanWebProject'
import { ExcelsiorWebProject } from '../navegation/webProjectNavigation/ExcelsiorWebProject'
import { JanuWebProject } from '../navegation/webProjectNavigation/JanuWebProject'
import { CoviranWebProject } from '../navegation/webProjectNavigation/CoviranWebProject'
import { FenixFitWebProject } from '../navegation/webProjectNavigation/FenixFitWebProject'
import { EscritorWebProject } from '../navegation/webProjectNavigation/EscritorWebProject'
import { EjerciciosCodeWebProject } from '../navegation/webProjectNavigation/EjerciciosCodeWebProject'
import { PadelManagerWebProject } from '../navegation/webProjectNavigation/PadelManagerWebProject'
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
          

              {/* Web Projects Navigation */}

              <Route path='/spidermanWebProject' element={<SpidermanWebProject/>}/>
              <Route path='/excelsiorWebProject' element={<ExcelsiorWebProject/>}/>
              <Route path='/januWebProject' element={<JanuWebProject/>}/>
              <Route path='/coviranWebProject' element={<CoviranWebProject/>}/>
              <Route path='/fenixFitWebProject' element={<FenixFitWebProject/>}/>
              <Route path='/escritorWebProject' element={<EscritorWebProject/>}/>
              <Route path='/padelManagerWebProject' element={<PadelManagerWebProject/>}/>
              <Route path='/ejerciciosCodeWebProject' element={<EjerciciosCodeWebProject/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  )
}
