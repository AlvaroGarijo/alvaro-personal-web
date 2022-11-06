import React from 'react'
import gradientePadelManager from '../../images/gradientePadelManager.png'
import responsivePadelMobile from '../../images/responsivePadelMobile.png'
import responsivePadelTablet from '../../images/responsivePadelTablet.png'
import responsivePadelDesktop from '../../images/responsivePadelDesktop.png'
import diseñoPadelManager1 from '../../images/diseñoPadelManager1.png'
import diseñoPadelManager2 from '../../images/diseñoPadelManager2.png'
import diseñoPadelManager3 from '../../images/diseñoPadelManager3.png'
import diseñoPadelManager4 from '../../images/diseñoPadelManager4.png'
import diseñoPadelManager5 from '../../images/diseñoPadelManager5.png'
import diseñoPadelManager6 from '../../images/diseñoPadelManager6.png'
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
    <div className='cardDesignWrapperPadelManager'>
            <p className='titleCardDesign'>Ejemplo de Diseños para Social Media</p>
            <div className='cardsDesignFlex'>
                <img className='cardImagePadelManagerDesign' src={diseñoPadelManager1} alt='card'/>
                <img className='cardImagePadelManagerDesign' src={diseñoPadelManager6} alt='card'/>
                <img className='cardImagePadelManagerDesign' src={diseñoPadelManager3} alt='card'/>
                <img className='cardImagePadelManagerDesign' src={diseñoPadelManager4} alt='card'/>
                <img className='cardImagePadelManagerDesign' src={diseñoPadelManager5} alt='card'/>
                <img className='cardImagePadelManagerDesign' src={diseñoPadelManager2} alt='card'/>
            </div>
            
    </div>
    <div className='cardDesignWrapperFenixFit'>
            <p className='titleCardDesign'>Ejemplo de Diseño Responsive: Mobile</p>
            <img className='cardImagePadelManagerMobile' src={responsivePadelMobile} alt='cardPMMobile'/>
    </div>
    <div className='cardDesignWrapperFenixFit'>
            <p className='titleCardDesign'>Ejemplo de Diseño Responsive: Tablet</p>
            <img className='cardImagePadelManager' src={responsivePadelTablet} alt='cardPMTablet'/>
    </div>
    <div className='cardDesignWrapperFenixFit'>
            <p className='titleCardDesign'>Ejemplo de Diseño Responsive: Desktop</p>
            <img className='cardImagePadelManager' src={responsivePadelDesktop} alt='cardPMDesktop'/>
    </div>
    

    <div className='linkComeBackDesignsWrapper'>
        <Link to='/design' className='linkComeBackDesigns'> <TbArrowBackUp/> Vuelve a Diseños </Link>
    </div>
</div>
  )
}
