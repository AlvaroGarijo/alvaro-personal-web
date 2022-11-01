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
          <h4 className='titleContact'>Puedes contactar conmigo por: </h4>
          <ul className='listWrapperContact'>
              <li className='linkSocialContact'><a className='linkContact' href='https://www.instagram.com/gari_fitvibes/' target='_blank' rel='noreferrer'><BsInstagram className='iconContact'/> Instagram  <span className='urlContact'>https://www.instagram.com/gari_fitvibes/</span></a></li>
              <li className='linkSocialContact'><a className='linkContact' href='https://www.facebook.com/alvaro.garijosanchez' target='_blank' rel='noreferrer'><BsFacebook className='iconContact'/> Facebook <span className='urlContact'>https://www.facebook.com/alvaro.garijosanchez</span></a></li>
              <li className='linkSocialContact'><a className='linkContact' href='https://www.linkedin.com/in/alvarogarijosanchez/' target='_blank' rel='noreferrer'><BsLinkedin className='iconContact'/> LinkedIn  <span className='urlContact'>https://www.linkedin.com/in/alvarogarijosanchez/</span></a></li>
              <li className='linkSocialContact linkContact'> <BsWhatsapp className='iconContact'/> Whatsapp  <span className='urlContact'>678023194</span></li>
              <li className='linkSocialContact'><a className='linkContact' href='https://github.com/AlvaroGarijo' target='_blank' rel='noreferrer'><BsGithub className='iconContact'/> GitHub  <span className='urlContact'>https://github.com/AlvaroGarijo</span></a></li>
              <li className='linkSocialContact linkContact'><FaMailBulk className='iconContact'/> garijodev@gmail.com</li>
          </ul>
        </div>
        <img className='imgContact1' src={brownWater} alt='brownWater'/>
        <img className='imgContact2' src={cafeContact} alt='caféContact'/>
      </div>
    </div>
  )
}
