import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaMailBulk } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import './stylesNavigation/Contact.css';
import cafeContact from '../images/cafe.jpeg'
import brownWater from '../images/brownWater.png'

export const Contact = () => {
  return (
    <div>
      <div className='headerWrapper'>
        <h4 className='titleNavigation'>Contacto</h4>
        <div className='contactWrapper'>
          <h4 className='titleContact'>contacta conmigo aquí </h4>
          <ul className='listWrapperContact'>
              <li className='linkSocialContact'>
                <button className='buttonContact'><a className='linkContact' href='https://www.instagram.com/gari_fitvibes/' target='_blank' rel='noreferrer'><BsInstagram className='iconContact'/></a> </button>
              </li>
              <li className='linkSocialContact'>
                <button className='buttonContact'><a className='linkContact' href='https://www.facebook.com/alvaro.garijosanchez' target='_blank' rel='noreferrer'><BsFacebook className='iconContact'/> </a></button>
              </li>
              <li className='linkSocialContact'>
                <button className='buttonContact'><a className='linkContact' href='https://www.linkedin.com/in/alvarogarijosanchez/' target='_blank' rel='noreferrer'><BsLinkedin className='iconContact'/>  </a></button>
              </li>
              <li className='linkSocialContact'>
                <button className='buttonContact'><a className='linkContact' href='https://github.com/AlvaroGarijo' target='_blank' rel='noreferrer'><BsGithub className='iconContact'/> </a></button>
              </li>
              <li className='linkSocialContact'>
                <button className='buttonContact'><a className='linkContact' href='mailto:garijodev@gmail.com'><FaMailBulk className='iconContact'/></a></button>
              </li>
          </ul>
        </div>
        <img className='imgContact1' src={brownWater} alt='brownWater'/>
        <img className='imgContact2' src={cafeContact} alt='caféContact'/>
      </div>
    </div>
  )
}
