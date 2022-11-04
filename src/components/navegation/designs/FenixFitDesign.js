import React from 'react'
import './styleDesigns/FenixFitDesign.css'
import gradientFenixFit from '../../images/gradienteFenixFit.png'
import homePageFenixFit from '../../images/homePageFenixFit.png'
import { TbArrowBackUp } from 'react-icons/tb'
import { Link } from 'react-router-dom'

export const FenixFitDesign = () => {
  return (
    <div className='webDesign'>
    <h4 className='titleNavigation'>Diseño Fénix Fit</h4>
    <div className='headerDesignWrapper'>
        <p className='titleColorsDesign'>Gama de colores y fuente especial en el diseño: </p>
        <img className='gradientColorsBar' src={gradientFenixFit} alt='card'/>
        <div className='headerFlex'>
            <div className='buttonsColors'>
                <p>Colores Generales</p>
                <div className='squareWhite'> #FFFFFF</div>
                <div className='squareBlack'> #000000</div>
                <div className='squareGold'> #8b8900</div>
            </div>
            <div>
                <p className='fontDesignSpider'>Fuente utilizada: EastBorder.ttf</p>
            </div>
        </div>
    </div>
    <div className='cardDesignWrapperFenixFit'>
    <p className='titleCardDesign'>Ejemplo de homepage en la web Fenix-Fit: </p>
            <img className='cardImageFenixFit' src={homePageFenixFit} alt='card'/>
    </div>

    <div className='linkComeBackDesignsWrapper'>
        <Link to='/design' className='linkComeBackDesigns'> <TbArrowBackUp/> Vuelve a Diseños </Link>
    </div>
</div>
  )
}
