import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import { AboutMe } from '../navegation/AboutMe'
import { Contact } from '../navegation/Contact'
import { Design } from '../navegation/Design'
import { HomePage } from '../navegation/HomePage'
import { TrainingCode } from '../navegation/TrainingCode'
import { SpidermanDesign } from '../navegation/designs/SpidermanDesign'
import { WebProjects } from '../navegation/WebProjects'
import { CoviranDesign } from '../navegation/designs/CoviranDesign'
import { FenixFitDesign } from '../navegation/designs/FenixFitDesign'
import { EscritorDesign } from '../navegation/designs/EscritorDesign'
import { PadelManager } from '../navegation/designs/PadelManager'
import { AsesoriaDesign } from '../navegation/designs/AsesoriaDesign'
import { CurriculumDesign } from '../navegation/designs/CurriculumDesign'
import { EjerciciosCodeDesign } from '../navegation/designs/EjerciciosCodeDesign'
import { BuildIt } from '../buildIT/BuildIt'
import { CosasATenerEnCuentaGym } from '../navegation/blog/CosasATenerEnCuentaGym'

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


              {/* Rutas de Diseño */}

              <Route path='/spidermanDesign' element={<SpidermanDesign/>}/>
              <Route path='/coviranDesign' element={<CoviranDesign/>}/>
              <Route path='/fenixFitDesign' element={<FenixFitDesign/>}/>
              <Route path='/escritorDesign' element={<EscritorDesign/>}/>
              <Route path='/padelManagerDesign' element={<PadelManager/>}/>
              <Route path='/asesoriaDesign' element={<AsesoriaDesign/>}/>
              <Route path='/ejerciciosCodeDesign' element={<EjerciciosCodeDesign/>}/>
              <Route path='/curriculumDesign' element={<CurriculumDesign/>}/>
             
             {/* Ruta de Página en Construcción */}

              <Route path='/buildItPage' element={<BuildIt/>}/>

              {/* Rutas del blog */}

              <Route path='/cosasATenerEnCuentaGym' element={<CosasATenerEnCuentaGym/>}/>

          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  )
}
