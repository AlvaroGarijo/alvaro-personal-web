import React from 'react'
import './stylesNavigation/WebProjects.css'
import { AsideSocialMedia } from '../asideSocialMedia/AsideSocialMedia'
import { Link } from 'react-router-dom'
export const WebProjects = () => {
  return (
    <div>
      <div className='headerWrapper'>
        <h4 className='titleNavigation'>Proyectos Web</h4>
        <p className='subtitleNavigationWebProject'>Pulsa el ratón y descubre ... </p>
        <div className='cardsWrapper'>
          <div className="cardBox">
            <div className="card">
              <div className="front">
                Spiderman
              </div>
              <div className="back">
                <Link className='linkBack' to='/spidermanWebProject'>Spiderman</Link>                    
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="card">
              <div className="front">
                    Excelsior
              </div>
              <div className="back">
                <Link className='linkBack' to='/excelsiorWebProject'>Excelsior</Link> 
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="card">
              <div className="front">
                    Janu
              </div>
              <div className="back">
                <Link className='linkBack' to='/januWebProject'>Janu</Link> 
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="card">
              <div className="front">
                    Covirán
              </div>
              <div className="back">
                <Link className='linkBack' to='/coviranWebProject'>Covirán</Link> 
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="card">
              <div className="front">
                    Fénix-Fit
              </div>
              <div className="back">
                <Link className='linkBack' to='/fenixFitWebProject'>Fenix-Fit</Link> 
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="card">
              <div className="front">
                    Escritor
              </div>
              <div className="back">
                <Link className='linkBack' to='/escritorWebProject'>Escritor</Link> 
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="card">
              <div className="front">
                    PadelManager
              </div>
              <div className="back">
                <Link className='linkBack' to='/padelManagerWebProject'>PadelManager</Link> 
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="card">
              <div className="front">
                    Ejercicios Code
              </div>
              <div className="back">
              <Link className='linkBack' to='/ejerciciosCodeWebProject'>Ejercicios Code</Link> 
              </div>
            </div>
          </div>
        </div>


        <AsideSocialMedia/>
      </div>
    </div>
  )
}
