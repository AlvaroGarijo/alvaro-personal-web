import React from 'react'
import './stylesNavigation/Design.css'
import { Link } from 'react-router-dom'
import { AsideSocialMedia } from '../asideSocialMedia/AsideSocialMedia'

export const Design = () => {
  return (
    <div>
      <div className='headerWrapper'>
        <h4 className='titleNavigation'>Diseños</h4>
        <div className='cardsWrapper'>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                Spiderman
              </div>
              <div className="back">
                <Link className='linkBack' to='/spidermanWebProject'>Spiderman</Link>                    
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                    Excelsior
              </div>
              <div className="back">
                <Link className='linkBack' to='/excelsiorWebProject'>Excelsior</Link> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                    Janu
              </div>
              <div className="back">
                <Link className='linkBack' to='/januWebProject'>Janu</Link> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                    Covirán
              </div>
              <div className="back">
                <Link className='linkBack' to='/coviranWebProject'>Covirán</Link> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                    Fénix-Fit
              </div>
              <div className="back">
                <Link className='linkBack' to='/fenixFitWebProject'>Fenix-Fit</Link> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                    Escritor
              </div>
              <div className="back">
                <Link className='linkBack' to='/escritorWebProject'>Escritor</Link> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                    PadelManager
              </div>
              <div className="back">
                <Link className='linkBack' to='/padelManagerWebProject'>PadelManager</Link> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                    Ejercicios Code
              </div>
              <div className="back">
                <Link className='linkBack' to='/ejerciciosCodeWebProject'>Ejercicios Code</Link> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                    Laboratorio Dental
              </div>
              <div className="back">
                <Link className='linkBack' to='/laboratorioDesign'> Laboratorio Dental</Link> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                    Asesoría
              </div>
              <div className="back">
                <Link className='linkBack' to='/ejerciciosCodeWebProject'>Asesoría</Link> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                    Sarfati Garden
              </div>
              <div className="back">
                <Link className='linkBack' to='/ejerciciosCodeWebProject'>Sarfati Garden</Link> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                    Curriculum Vitae
              </div>
              <div className="back">
                <Link className='linkBack' to='/ejerciciosCodeWebProject'>Curriculum Vitae</Link> 
              </div>
            </div>
          </div>
        </div>


        <AsideSocialMedia/>
     
      </div>
    </div>
  )
}
