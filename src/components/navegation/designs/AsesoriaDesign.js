import React from 'react'
import './styleDesigns/AsesoriaDesign.css'
import gradienteAsesoria from '../../images/gradienteAsesoria.png'
import asesoriaDesign from '../../images/asesoriaDesign.png'
import { TbArrowBackUp } from 'react-icons/tb'
import { Link } from 'react-router-dom'

export const AsesoriaDesign = () => {
  return (
    <div className='webDesign'>
        <h4 className='titleNavigation'>Diseño Covirán</h4>
        <div className='headerDesignWrapper'>
            <p className='titleColorsDesign'>Gama de colores y fuente especial en el diseño: </p>
            <img className='gradientColorsBar' src={gradienteAsesoria} alt='card'/>
            <div className='headerFlex'>
                <div className='buttonsColors'>
                    <p>Color de fondo</p>
                    <div className='squareDarkBlueAses'> #00213d</div>
                    <p>Colores de botones</p>
                    <div className='squareLightBlueAses'> #1b4d79</div>
                    <div className='squareYellowAses'> #ffde59</div>
                </div>
                <div>
                    <p className='fontDesignSpider'>Fuente utilizada: Open-Sans</p>
                </div>
            </div>
        </div>
        <div className='cardDesignWrapperAsesoria'>
        <p className='titleCardDesign'>Ejemplo de diseño de la homepage nivel medio de la web: </p>
                <img className='cardImageAsesoria' src={asesoriaDesign} alt='designAsesoria'/>
        </div>
        
        <div className='linkComeBackDesignsWrapper'>
            <Link to='/design' className='linkComeBackDesigns'> <TbArrowBackUp/> Vuelve a Diseños </Link>
        </div>
    </div>
  )
}
