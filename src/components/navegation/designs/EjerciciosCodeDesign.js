import React from 'react'
import './styleDesigns/EjerciciosCode.css'
import { TbArrowBackUp } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import ejercicio1Design from '../../images/ejercicioDesign1.png'
import ejercicio2Design from '../../images/ejercicioDesign2.png'
import ejercicio3Design from '../../images/ejercicioDesign3.png'
import ejercicio4Design from '../../images/ejercicioDesign4.png'
import ejercicio5Design from '../../images/ejercicioDesign5.png'
import ejercicio6Design from '../../images/ejercicioDesign6.png'
import ejercicio7Design from '../../images/ejercicioDesign7.png'
import ejercicio8Design from '../../images/ejercicioDesign8.png'

export const EjerciciosCodeDesign = () => {
  return (
    <div className='webDesign'>
        <h4 className='titleNavigation'>Diseño de Ejercicios Variados</h4>
    
        <div className='cardDesignWrapperExercise'>
            <img className='imgDesignEjercicio' src={ejercicio1Design} alt='ejercicio1'/>
            <img className='imgDesignEjercicio' src={ejercicio2Design} alt='ejercicio2'/>
            <img className='imgDesignEjercicio' src={ejercicio3Design} alt='ejercicio3'/>
            <img className='imgDesignEjercicio' src={ejercicio4Design} alt='ejercicio4'/>
            <img className='imgDesignEjercicio' src={ejercicio5Design} alt='ejercicio5'/>
            <img className='imgDesignEjercicio' src={ejercicio6Design} alt='ejercicio6'/>
            <img className='imgDesignEjercicio' src={ejercicio7Design} alt='ejercicio7'/>
            <img className='imgDesignEjercicio' src={ejercicio8Design} alt='ejercicio8'/>
        </div>
        
        <div className='linkComeBackDesignsWrapper'>
            <Link to='/design' className='linkComeBackDesigns'> <TbArrowBackUp/> Vuelve a Diseños </Link>
        </div>
</div>
  )
}
