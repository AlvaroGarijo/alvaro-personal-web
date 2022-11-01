import React from 'react'
import './stylesNavegation/WebProjects.css'
import { AsideSocialMedia } from '../asideSocialMedia/AsideSocialMedia'
export const WebProjects = () => {
  return (
    <div>
      <div className='headerWrapper'>
        <h4 className='titleNavigation'>Proyectos Web</h4>
        <p className='subtitleNavigationWebProject'>Pulsa el ratón y descubre ... </p>
        <div className='cardsWrapper'>
          <div class="cardBox">
            <div class="card">
              <div class="front">
                    Spiderman
              </div>
              <div class="back">
                    Spiderman
              </div>
            </div>
          </div>
          <div class="cardBox">
            <div class="card">
              <div class="front">
                    Excelsior
              </div>
              <div class="back">
                    Excelsior
              </div>
            </div>
          </div>
          <div class="cardBox">
            <div class="card">
              <div class="front">
                    Janu
              </div>
              <div class="back">
                    Janu
              </div>
            </div>
          </div>
          <div class="cardBox">
            <div class="card">
              <div class="front">
                    Covirán
              </div>
              <div class="back">
                    Covirán
              </div>
            </div>
          </div>
          <div class="cardBox">
            <div class="card">
              <div class="front">
                    Fénix-Fit
              </div>
              <div class="back">
                    Fénix-Fit
              </div>
            </div>
          </div>
          <div class="cardBox">
            <div class="card">
              <div class="front">
                    Escritor
              </div>
              <div class="back">
                    Escritor
              </div>
            </div>
          </div>
          <div class="cardBox">
            <div class="card">
              <div class="front">
                    Padel Manager
              </div>
              <div class="back">
                    Padel Manager
              </div>
            </div>
          </div>
          <div class="cardBox">
            <div class="card">
              <div class="front">
                    Ejercicios Code
              </div>
              <div class="back">
                    Ejercicios Code
              </div>
            </div>
          </div>
        </div>


        <AsideSocialMedia/>
      </div>
    </div>
  )
}
