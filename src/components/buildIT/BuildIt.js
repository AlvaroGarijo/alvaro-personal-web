import React from 'react'
import './BuildIt.css'
import enConstruccion from '../images/enConstruccion.jpeg'
import { Link } from 'react-router-dom'
import { TbArrowBackUp } from 'react-icons/tb'

export const BuildIt = () => {
  return (
    <div className='buildWrapper'>
      <img className='imgBuildIt' src={enConstruccion} alt=''/>
      <h4 className='buildTitle'>Página en Construcción, disculpe las molestias</h4>
      <div className='linkComeBackDesignsWrapper'>

        {/* hacer clase condicional, si esta en diseño, ve a diseño si no ve a proyectos */}
        <Link to='/design' className='linkComeBackWebProjects'> <TbArrowBackUp/> Visita Proyectos Web </Link>
        <Link to='/design' className='linkComeBackDesigns'> <TbArrowBackUp/> Visita Diseños </Link>
       
      </div>
    
    </div>


  )
}
