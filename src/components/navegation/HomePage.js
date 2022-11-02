import React from 'react'
import logoAlvaroWeb from '../images/logoBlanco.png'
import imageAlvaro from '../images/alvaroHome.jpg'
import { AiFillGithub } from 'react-icons/ai';
import 'animate.css';
import './stylesNavigation/HomePage.css'
import { Link } from 'react-router-dom';
import { AsideSocialMedia } from '../asideSocialMedia/AsideSocialMedia';


export const HomePage = () => {


  return (
    <>
      <div className='homePageWrapper'>
        <div className='imageCover'>
          <div className='opacityContainer'>
            <img className='logoHome' src={logoAlvaroWeb} alt='logoAlvaro'></img>
            <h1 className='nameWeb'>Alvaro <span className='secondNameWeb'>Garijo</span></h1>
            <h5 className='subNameWeb'>WEB DEVELOPER | WEB DESIGN | PERSONAL TRAINER</h5>
          </div>
        </div>
      </div>


      <div className='homePageWrapper2'>
        <h4 className='helloWorld'> Hola Mundo <a href="https://github.com/AlvaroGarijo" target='_blank' rel='noreferrer'><AiFillGithub className='iconCode'/></a></h4>
        <img className='imageCentralHome' src={imageAlvaro} alt='imgAlvaro'></img>
        <h4 className='titleHomePage'>Soy <span className='colorName'>Alvaro Garijo</span> y aquí podrás ver mis trabajos, diseños, entrenamientos  y más detalles sobre mi.</h4>
      </div>
      <div className='squaresWrapper' >
          <button className='buttonNavigationHome'>
            <Link to='/aboutMe' className='linkSquareHome'>
              <h6 className='first-H'>Aquí te cuento ...</h6>
              <h3 className='second-H'>Un poco sobre mi</h3>
              <h6 className='third-H'>Como entrenador y desarrollador web.</h6>
            </Link>
          </button>
          <button className='buttonNavigationHome'>
          <Link to='/webProjects' className='linkSquareHome'>
              <h6 className='first-H'>Aquí te invito a ...</h6>
              <h3 className='second-H'>Conocer mis trabajos como Web Developer</h3>
              <h6 className='third-H'>Desde hace más de 1 año.</h6>
            </Link>
          </button>
          <button className='buttonNavigationHome'>
          <Link to='/design' className='linkSquareHome'>
              <h6 className='first-H'>Aquí te invito a ...</h6>
              <h3 className='second-H'>Ver mis diseños</h3>
              <h6 className='third-H'>En Canva y Figma</h6>
            </Link>
          </button>
          <button className='buttonNavigationHome'>
          <Link to='/trainingCode' className='linkSquareHome'>
              <h6 className='first-H'>Aquí te comparto ...</h6>
              <h3 className='second-H'>Mis conocimientos en Desarrollo y Deporte</h3>
              <h6 className='third-H'>Visita el Blog, ¡no te arrepentirás!</h6>
            </Link>
          </button>
          <AsideSocialMedia className='disable'/>
      </div>
    </>
  )
}
