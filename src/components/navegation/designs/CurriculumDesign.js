import React from 'react'
import { TbArrowBackUp } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import gradienteCV from '../../images/gradienteCV.png'
import curriculum1_1 from '../../images/curriculum1-1.png'
import curriculum1_2 from '../../images/curriculum1-2.png'
import curriculum1_3 from '../../images/curriculum1-3.png'
import curriculum2_1 from '../../images/curriculum2-1.png'
import curriculum2_2 from '../../images/curriculum2-2.png'
import curriculum2_3 from '../../images/curriculum2-3.png'
import curriculum2_4 from '../../images/curriculum2-4.png'
import './styleDesigns/CurriculumDesign.css'

export const CurriculumDesign = () => {
  return (
    <div className='webDesign'>
    <h4 className='titleNavigation'>Diseño Fénix Fit</h4>
    <div className='headerDesignWrapper'>
        <p className='titleColorsDesign'>Gama de colores y fuente especial en el diseño: </p>
        <img className='gradientColorsBar' src={gradienteCV} alt='card'/>
        <div className='headerFlex'>
            <div className='buttonsColors'>
                <p>Colores Generales</p>
                <div className='squareDarkBlueCV'> #001847</div>
                <div className='squareLightBlueCV'> #00618A</div>
                <div className='squareWhite'> #FFFFFF</div>
            </div>
            <div>
                <p className='fontDesignSpider'>Fuentes utilizadas: Raleway | Granaina | Rubik Light</p>
            </div>
        </div>
    </div>
    <div className='cardDesignWrapperCV'>
    
            <p className='titleCardDesign'>Curriculum 1</p>
            <img className='cardImageCV' src={curriculum1_1} alt='card'/>
            <img className='cardImageCV' src={curriculum1_2} alt='card'/>
            <img className='cardImageCV' src={curriculum1_3} alt='card'/>
    </div>
    <div className='cardDesignWrapperCV'>
            <p className='titleCardDesign'>Curriculum 2</p>
            <img className='cardImageCV' src={curriculum2_1} alt='card'/>
            <img className='cardImageCV' src={curriculum2_2} alt='card'/>
            <img className='cardImageCV' src={curriculum2_3} alt='card'/>
            <img className='cardImageCV' src={curriculum2_4} alt='card'/>
    </div>
    
    <div className='linkComeBackDesignsWrapper'>
        <Link to='/design' className='linkComeBackDesigns'> <TbArrowBackUp/> Vuelve a Diseños </Link>
    </div>
</div>
  )
}
