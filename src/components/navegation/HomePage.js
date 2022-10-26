import React from 'react'
import logoAlvaroWeb from '../images/logoBlanco.png'
import imageAlvaro from '../images/alvaroHome.jpg'
import './stylesNavegation/HomePage.css'


export const HomePage = () => {
  return (
    <>
      <div className='homePageWrapper'>
        <div className='imageCover'>
          <div className='opacityContainer'>
            <img className='logoHome' src={logoAlvaroWeb} alt='logoAlvaro'></img>
            <h1 className='nameWeb'>Alvaro <span className='secondNameWeb'>Garijo</span></h1>
            <h5 className='subNameWeb'>WEB DEVELOPER | WEB DESIGN | PERSONAL TRAINER</h5>
            <i></i>
          </div>
        </div>
        
      </div>
      <div className='homePageWrapper2'>
        <p className='helloWorld'>Hola Mundo</p>
        <img className='imageCentralHome' src={imageAlvaro} alt='imgAlvaro'></img>
        <h4 className='titleHomePage'>Soy Alvaro garijo y aquí podrás ver mis trabajos, diseños, entrenamientos  y más detalles sobre mi.</h4>
      </div>
    </>
  )
}
