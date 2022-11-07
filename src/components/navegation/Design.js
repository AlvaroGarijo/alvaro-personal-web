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
                <span className='titleFront'>Spiderman</span>
                <Link className='linkBackMobile' to='/spidermanDesign'>Spiderman</Link> 
              </div>
              <div className="back">
                <Link className='linkBack' to='/spidermanDesign'>Spiderman</Link> 
                <div className='finishLine'>Finalizado</div>                   
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                <span className='titleFront'>Excelsior</span>
                <Link className='linkBackMobile' to='/buildItPage'>Excelsior</Link>
              </div>
              <div className="back">
                <Link className='linkBack' to='/buildItPage'>Excelsior</Link>
                <div className='developerLine'>En Desarrollo</div> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                <span className='titleFront'>Janu</span>
                <Link className='linkBackMobile' to='/buildItPage'>Janu</Link>
              </div>
              <div className="back">
                <Link className='linkBack' to='/buildItPage'>Janu</Link>
                <div className='developerLine'>En Desarrollo</div> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                  <span className='titleFront'>Covirán</span>
                  <Link className='linkBackMobile' to='/coviranDesign'>Covirán</Link>
              </div>
              <div className="back">
                <Link className='linkBack' to='/coviranDesign'>Covirán</Link>
                <div className='finishLine'>Finalizado</div> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                  <span className='titleFront'>Fenix-Fit</span>
                  <Link className='linkBackMobile' to='/fenixFitDesign'>Fenix-Fit</Link>
              </div>
              <div className="back">
                <Link className='linkBack' to='/fenixFitDesign'>Fenix-Fit</Link>
                <div className='finishLine'>Finalizado</div> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                <span className='titleFront'>Escritor</span>
                <Link className='linkBackMobile' to='/escritorDesign'>Escritor</Link>
              </div>
              <div className="back">
                <Link className='linkBack' to='/escritorDesign'>Escritor</Link>
                <div className='finishLine'>Finalizado</div>  
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                <span className='titleFront'>PadelManager</span>
                <Link className='linkBackMobile' to='/padelManagerDesign'>PadelManager</Link>
              </div>
              <div className="back">
                <Link className='linkBack' to='/padelManagerDesign'>PadelManager</Link>
                <div className='finishLine'>Finalizado</div> 
              </div>
            </div>
          </div>
          
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                <span className='titleFront'>Laboratorio Dental</span>
                <Link className='linkBackMobile' to='/buildItPage'> Laboratorio Dental</Link>
              </div>
              <div className="back">
                <Link className='linkBack' to='/buildItPage'> Laboratorio Dental</Link>
                <div className='developerLine'>En Desarrollo</div> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                <span className='titleFront'>Asesoría</span>
                <Link className='linkBackMobile' to='/asesoriaDesign'>Asesoría</Link>
              </div>
              <div className="back">
                <Link className='linkBack' to='/asesoriaDesign'>Asesoría</Link>
                <div className='finishLine'>Finalizado</div> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                <span className='titleFront'>Sarfati Garden</span>
                <Link className='linkBackMobile' to='/buildItPage'>Sarfati Garden</Link>
              </div>
              <div className="back">
                <Link className='linkBack' to='/buildItPage'>Sarfati Garden</Link>
                <div className='developerLine'>En Desarrollo</div> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                <span className='titleFront'>Ejercicios Code</span>
                <Link className='linkBackMobile' to='/ejerciciosCodeDesign'>Ejercicios Diseño</Link>
              </div>
              <div className="back">
                <Link className='linkBack' to='/ejerciciosCodeDesign'>Ejercicios Diseño</Link>
                <div className='finishLine'>Finalizado</div> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                  <span className='titleFront'>Curriculum Vitae</span>
                    <Link className='linkBackMobile' to='/curriculumDesign'>Curriculum Vitae</Link>
              </div>
              <div className="back">
                <Link className='linkBack' to='/curriculumDesign'>Curriculum Vitae</Link>
                <div className='finishLine'>Finalizado</div> 
              </div>
            </div>
          </div>
        </div>


        <AsideSocialMedia/>
     
      </div>
    </div>
  )
}
