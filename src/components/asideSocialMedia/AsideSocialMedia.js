import React from 'react'
import './asideSocialMedia.css'
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

export const AsideSocialMedia = () => {
  return (
    <div> 
        <aside className='asideNavLinks'>
            <ul className='linksSocialMedia'> 
              <li className='listSocial'><a className='linkSocialMedia' href='https://www.instagram.com/gari_fitvibes/' target='_blank' rel='noreferrer'><BsInstagram/></a></li>
              <li className='listSocial'><a className='linkSocialMedia' href='https://www.facebook.com/alvaro.garijosanchez' target='_blank' rel='noreferrer'><BsFacebook/></a></li>
              <li className='listSocial'><a className='linkSocialMedia' href='https://www.linkedin.com/in/alvarogarijosanchez/' target='_blank' rel='noreferrer'><BsLinkedin/></a></li>
              <li className='listSocial'><a className='linkSocialMedia' href='https://github.com/AlvaroGarijo' target='_blank' rel='noreferrer'><BsGithub/></a></li>
            </ul>
        </aside>
    </div>
  )
}
