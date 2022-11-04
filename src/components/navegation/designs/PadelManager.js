import React from 'react'
import gradientePadelManager from '../../images/gradientePadelManager.png'
import responsivePadelMobile from '../../images/responsivePadelMobile.png'
import responsivePadelTablet from '../../images/responsivePadelTablet.png'
import responsivePadelDesktop from '../../images/responsivePadelDesktop.png'
import { TbArrowBackUp } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import './styleDesigns/PadelManager.css'

export const PadelManager = () => {
  return (
    <div className='webDesign'>
    <h4 className='titleNavigation'>Diseño Padel Manager</h4>
    <div className='headerDesignWrapper'>
        <p className='titleColorsDesign'>Gama de colores y fuente especial en el diseño: </p>
        <img className='gradientColorsBar' src={gradientePadelManager} alt='card'/>
        <div className='headerFlex'>
            <div className='buttonsColors'>
                <p>Colores Generales</p>
                <div className='squareWhite'> #FFFFFF</div>
                <div className='squareGreenPadel'> #6ede29</div>
                <div className='squareBluePadel'> #0d003b</div>
            </div>
            <div>
                <p className='fontDesignSpider'>Fuente utilizada: Gelion.ttf</p>
            </div>
        </div>
    </div>
    <div className='cardDesignWrapperFenixFit'>
            <p className='titleCardDesign'>Ejemplo de Diseño Responsive: Mobile</p>
            <img className='cardImagePadelManagerMobile' src={responsivePadelMobile} alt='card'/>
    </div>
    <div className='cardDesignWrapperFenixFit'>
            <p className='titleCardDesign'>Ejemplo de Diseño Responsive: Tablet</p>
            <img className='cardImagePadelManager' src={responsivePadelTablet} alt='card'/>
    </div>
    <div className='cardDesignWrapperFenixFit'>
            <p className='titleCardDesign'>Ejemplo de Diseño Responsive: Desktop</p>
            <img className='cardImagePadelManager' src={responsivePadelDesktop} alt='card'/>
    </div>
    

    <div className='linkComeBackDesignsWrapper'>
        <Link to='/design' className='linkComeBackDesigns'> <TbArrowBackUp/> Vuelve a Diseños </Link>
    </div>
</div>
  )
}
