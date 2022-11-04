import React from 'react'
import './styleDesigns/SpidermanDesign.css'
import cardSpiderman from '../../images/cardSpiderman.png'
import gradienteSpiderman from '../../images/gradienteSpiderman.png'
import spidermanResponsiveMobile from '../../images/spidermanResponsiveMobile.png'
import spidermanResponsiveTablet from '../../images/spidermanResponsiveTablet.png'
import spidermanResponsiveDesktop from '../../images/spidermanResponsiveDesktop.png'
import { Link } from 'react-router-dom'
import { TbArrowBackUp } from 'react-icons/tb'


export const SpidermanDesign = () => {
  return (
    <div>
        <div className='webDesign'>
            <h4 className='titleNavigation'>Diseño Spider-man</h4>
            <div className='headerDesignWrapper'>
                <p className='titleColorsDesign'>Gama de colores y fuente especial en el diseño: </p>
                <img className='gradientColorsBar' src={gradienteSpiderman} alt='card'/>
                <div className='headerFlex'>
                    <div className='buttonsColors'>
                        <p>Color de fondo</p>
                        <div className='squareBlue'> #0E2C48</div>
                        <p>Colores de botones</p>
                        <div className='squareBlack'> #000000</div>
                        <div className='squareYellow'> #FFC700</div>
                    </div>
                    <div>
                        <p className='fontDesignSpider'>Fuente utilizada: Amazing Spiderman Slant.ttf</p>
                        <span className='urlDesignSpider'>Para ver la Aplicación pulsa  <a href='https://spiderman-project-one.vercel.app/' target='_blank' rel='noreferrer'> aquí</a></span>
                    </div>
                </div>
            </div>
            <div className='cardDesignWrapper'>
                <p className='titleCardDesign'>Ejemplo de tarjeta de personaje en toda la web: </p>
                <img className='cardImageSpider' src={cardSpiderman} alt='card'/>
            </div>
            <div className='responsiveDesignWrapper'>
                <p className='titleResponsiveDesign'>La web es completamente Responsive:  </p>
                <div className='responsiveWrapper'>
                        <img className='responMobile' src={spidermanResponsiveMobile} alt='responsive'/>
                        <img className='responTablet' src={spidermanResponsiveTablet} alt='responsive'/>
                        <img className='responDesktop' src={spidermanResponsiveDesktop} alt='responsive'/>
                </div>
            </div>
            <div className='linkComeBackDesignsWrapper'>
                <Link to='/design' className='linkComeBackDesigns'> <TbArrowBackUp/> Vuelve a Diseños </Link>
            </div>
        </div>
    </div>
  )
}
