import React from 'react'
import './styleDesigns/CoviranDesign.css'
import gradienteCoviran from '../../images/gradienteCoviran.png'
import { Link } from 'react-router-dom'
import { TbArrowBackUp } from 'react-icons/tb'

export const CoviranDesign = () => {
  return (
    <div className='webDesign'>
        <h4 className='titleNavigation'>Diseño Covirán</h4>
        <div className='headerDesignWrapper'>
            <p className='titleColorsDesign'>Gama de colores y fuente especial en el diseño: </p>
            <img className='gradientColorsBar' src={gradienteCoviran} alt='card'/>
            <div className='headerFlex'>
                <div className='buttonsColors'>
                    <p>Color de fondo</p>
                    <div className='squareGreen'> #009045</div>
                    <p>Colores de botones</p>
                    <div className='squareRed'> #BF0411</div>
                    <div className='squareWhite'> #FFFFFF</div>
                </div>
                <div>
                    <p className='fontDesignSpider'>Fuente utilizada: Inter-Variable.ttf</p>
                </div>
            </div>
        </div>
        <div className='linkComeBackDesignsWrapper'>
            <Link to='/design' className='linkComeBackDesigns'> <TbArrowBackUp/> Vuelve a Diseños </Link>
        </div>
    </div>
  )
}
