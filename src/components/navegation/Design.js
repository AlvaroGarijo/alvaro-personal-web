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
                <Link className='linkBack' to='/spidermanDesign'>Spiderman</Link> 
                <div className='finishLine'>Finalizado</div>                   
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
                <div className='developerLine'>En Desarrollo</div> 
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
                <div className='developerLine'>En Desarrollo</div> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                    Covirán
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
                    Fénix-Fit
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
                    Escritor
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
                    PadelManager
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
                    Laboratorio Dental
              </div>
              <div className="back">
                <Link className='linkBack' to='/laboratorioDesign'> Laboratorio Dental</Link>
                <div className='developerLine'>En Desarrollo</div> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                    Asesoría
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
                    Sarfati Garden
              </div>
              <div className="back">
                <Link className='linkBack' to='/ejerciciosCodeWebProject'>Sarfati Garden</Link>
                <div className='developerLine'>En Desarrollo</div> 
              </div>
            </div>
          </div>
          <div className="cardBoxDesign">
            <div className="card">
              <div className="front">
                    Ejercicios Diseño
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
                    Curriculum Vitae
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
