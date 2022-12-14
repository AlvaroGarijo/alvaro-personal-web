import React from 'react'
import './stylesNavigation/TrainingCode.css'
import { AsideSocialMedia } from '../asideSocialMedia/AsideSocialMedia'
import { Link } from 'react-router-dom'

export const TrainingCode = () => {
  return (
    <div>
      <div className='headerWrapper'>
        <h4 className='titleNavigation'>Training | Code</h4>
        <h2 className='subtitleTrainingAndCode'>"Entrena para la vida, para la salud física y mental"</h2>
        <div className='paragraphTC'>
          <p className='parag1'>Empieza por donde quieras, pero empieza.</p>
          <p className='parag1'>Como os comento en el apartado sobre mi, más de 10 años me avalan como entrenador deportivo y personal, en los cuales he podido mejorar la vida de muchas personas.</p>
          <p className='parag1'>También con un año de experiencia como programador web, compartiré contigo algunos detalles, curiosidades y aspectos a resaltar de mi cambio de profesión.</p>
          <p className='parag1'>Aquí os dejaré algunos tips de entrenamiento físico para que conozcáis de primera mano algunas cositas interesantes y otros de programación que os podrán ayudar.</p>
        </div>

        <div className='blogFlexWrapper'>
          <div className='trainingArea'>
            <h4 className='titleArea'>Training</h4>
            <button className='buttonTrainingArea'>
              <Link to='/cosasATenerEnCuentaGym' className='linkArea'>6 cosas necesarias para ir al gimnasio</Link>
            </button>
            <button className='buttonTrainingArea desabledTraining'><a className='linkArea' href='#'> Suplementación, ¿Si o No?</a></button>
            <button className='buttonTrainingArea desabledTraining'><a className='linkArea' href='#'> ¿Cómo sé que zapatilla comprar?</a></button>
            <button className='buttonTrainingArea desabledTraining'><a className='linkArea' href='#'> ¿Antes de contratar un "PT" lee esto?</a></button>
          </div>
          <div className='codeArea'>
            <h4 className='titleArea'>Code</h4>
            <button className='buttonCodeArea desabledCode'><a className='linkAreaCode' href='#'> ¿Por dónde empiezo?</a></button>
            <button className='buttonCodeArea desabledCode'><a className='linkAreaCode' href='#'> Full-Stack </a></button>
            <button className='buttonCodeArea desabledCode'><a className='linkAreaCode' href='#'> ¿Eres Frontend o Backend?</a></button>
            <button className='buttonCodeArea desabledCode'><a className='linkAreaCode' href='#'> ¿Necesito ir a la uni para programar?</a></button>
          </div>
        </div>
        <p className='blogProxi'>Próximamente estará el blog funcionando... </p>
      </div>

      <AsideSocialMedia/>
    </div>
  )
}
