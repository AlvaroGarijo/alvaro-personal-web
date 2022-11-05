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
                <a className='linkBack' href='https://spiderman-project-m2j7zrvpk-alvarogarijo.vercel.app/' target='_blank' rel='noreferrer' >Spiderman</a>
                <div className='finishLine'>Finalizado</div>
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="card">
              <div className="front">
                    Excelsior
              </div>
              <div className="back">
                <Link className='linkBack' to='/buildItPage'> Excelsior</Link>
                <div className='developerLine'>En Desarrollo</div>
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="card">
              <div className="front">
                    Janu
              </div>
              <div className="back">
              <div className='linkBack'>Janu</div>
                <div className='developerLine'>En Desarrollo</div> 
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="card">
              <div className="front">
                    Covirán
              </div>
              <div className="back">
                <div className='linkBack'>Covirán</div>
                <div className='developerLine'>En Desarrollo</div>
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="card">
              <div className="front">
                    Fénix-Fit
              </div>
              <div className="back">
                <a className='linkBack' href='https://github.com/AlvaroGarijo/Fenix' target='_blank' rel='noreferrer' >Fenix-Fit</a>
                <div className='noDeploy'>Finalizado No Desplegado</div>
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="card">
              <div className="front">
                    Escritor
              </div>
              <div className="back">
                <div className='linkBack'>Escritor</div>
                <div className='developerLine'>En Desarrollo</div>
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="card">
              <div className="front">
                    PadelManager
              </div>
              <div className="back">
                <a className='linkBack' href='https://padelmanager.com/' target='_blank' rel='noreferrer' >PadelManager</a>
                <div className='finishLine'>Finalizado</div> 
              </div>
            </div>
          </div>
          <div className="cardBox">
            <div className="card">
              <div className="front">
                    Ejercicios Code
              </div>
              <div className="back">
                <a className='linkBack' href='https://github.com/AlvaroGarijo?tab=repositories' target='_blank' rel='noreferrer' >Ejercicios Variados</a>
                <div className='finishLine'>Finalizados</div> 
              </div>
            </div>
          </div>
        </div>


        <AsideSocialMedia/>
      </div>
    </div>
  )
}
