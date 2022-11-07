import React from 'react'
import { Link } from 'react-router-dom'
import { TbArrowBackUp } from 'react-icons/tb'
import gradientEscritor from '../../images/gradienteEscritor.png'
import responsiveEscritor from '../../images/responsiveEscritor.png'
import './styleDesigns/EscritorDesign.css'

export const EscritorDesign = () => {
  return (
    <div className='webDesign'>
    <h4 className='titleNavigation'>Diseño Escritor</h4>
    <div className='headerDesignWrapper'>
        <p className='titleColorsDesign'>Gama de colores y fuente especial en el diseño: </p>
        <img className='gradientColorsBar' src={gradientEscritor} alt='card'/>
        <div className='headerFlex'>
            <div className='buttonsColors'>
                <p>Colores Generales</p>
                <div className='squareWhite'> #FFFFFF</div>
                <div className='squareGray'> #6F6969</div>
                <div className='squareBlack'> #000000</div>
            </div>
            <div>
                <p className='fontDesignSpider'>Fuente utilizada: Archivo.ttf</p>
            </div>
        </div>
    </div>
    <div className='cardDesignWrapperEscritor'>
    <p className='titleCardDesign'>Ejemplo de Diseño Responsive: </p>
            <img className='cardImageEscritor' src={responsiveEscritor} alt='card'/>
    </div>

    <div className='linkComeBackDesignsWrapper'>
        <Link to='/design' className='linkComeBackDesigns'> <TbArrowBackUp/> Vuelve a Diseños </Link>
    </div>
</div>
  )
}
