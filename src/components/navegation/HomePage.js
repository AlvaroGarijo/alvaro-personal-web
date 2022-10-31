import React from 'react'
import logoAlvaroWeb from '../images/logoBlanco.png'
import imageAlvaro from '../images/alvaroHome.jpg'
// import iconArrow from '../images/icons/icons8-flecha-ampliar-64.png'
import { AiFillGithub } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import 'animate.css';
import './stylesNavegation/HomePage.css'
import { Link } from 'react-router-dom';


export const HomePage = () => {


  return (
    <>
      <div className='homePageWrapper'>
        <div className='imageCover'>
          <div className='opacityContainer'>
            <img className='logoHome' src={logoAlvaroWeb} alt='logoAlvaro'></img>
            <h1 className='nameWeb'>Alvaro <span className='secondNameWeb'>Garijo</span></h1>
            <h5 className='subNameWeb'>WEB DEVELOPER | WEB DESIGN | PERSONAL TRAINER</h5>
            {/* <div className='containerIcon'>
              <img className='iconArrow animate__animated animate__bounceIn animate__infinite' src={iconArrow} alt='iconarrow'/>
            </div> */}
           
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
          <aside className='asideNavLinks'>
        <ul className='linksSocialMedia'> 
          <li className='listSocial'><a className='linkSocialMedia' href='https://www.instagram.com/gari_fitvibes/' target='_blank' rel='noreferrer'><BsInstagram/></a></li>
          <li className='listSocial'><a className='linkSocialMedia' href='https://www.facebook.com/alvaro.garijosanchez' target='_blank' rel='noreferrer'><BsFacebook/></a></li>
          <li className='listSocial'><a className='linkSocialMedia' href='https://www.linkedin.com/in/alvarogarijosanchez/' target='_blank' rel='noreferrer'><BsLinkedin/></a></li>
          <li className='listSocial'><a className='linkSocialMedia' href='https://github.com/AlvaroGarijo' target='_blank' rel='noreferrer'><BsGithub/></a></li>
        </ul>
      </aside>
      </div>
    </>
  )
}
