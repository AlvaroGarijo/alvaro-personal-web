import React from 'react'
import './stylesNavigation/AboutMe.css';
import alvaroAboutMe from '../images/alvaroAboutMe.jpg'
import { AsideSocialMedia } from '../asideSocialMedia/AsideSocialMedia'

export const AboutMe = () => {
  return (
    <div className='aboutMeWrapper'>
      <div className='headerWrapper'>
        <h4 className='titleNavigation'>Sobre mi</h4>
        <p className='phraseAboutMe'>"Ve a por lo difícil, lo fácil lo hace todo el mundo"</p>      
        <p className='knowMe'>Conóceme antes de nada.</p>
        <p className='presentationParagraph'>Mi nombre es Álvaro Garijo, soy entrenador personal, diseñador de páginas web y desarrollador fullstack.</p>
      </div>
      <div className='imgAlvaroWrapp'>
             <img className='imgAlvaroTrainer' src={alvaroAboutMe} alt="alvaroTrainer"/>
      </div>
      <div className='paragraphWrapper'>
        <p className='paragraph1'>Llevo +12 años dedicando mi vida al deporte, al fitness y al entrenamiento deportivo, al coaching hacia mis alumnos, a mejorar vidas, a escuchar a la gente y a tratar de ayudar a todas las personas que han confiado en mi profesionalidad, en mis conocimientos y en mi saber hacer, programar, empatizar y comprender las necesidades de quienes han sido mis alumnos.</p>
          <div className='flexTitleAndList'>
            <h4>Para ello realicé los siguientes estudios: </h4>
              <div className='flexlistAndImg'>
                <ul>
                  <li className='listStudy'>Maestro de Educación Física</li>
                  <li className='listStudy'>Técnico Superior en Actividad Física y Deporte</li>
                  <li className='listStudy'>Gestión en Centros Deportivos</li>
                  <li className='listStudy'>Curso de Técnico en Nutrición y Dietética</li>
                  <li className='listStudy'>Curso en Coaching Deportivo</li>
              </ul>
              
            </div>
          </div>
        <div>
        <p className='paragraph2'>Aunque el fitness me gusta, notaba que me faltaba un plan B para evolucionar en mi camino hacia el desarrollo personal y profesional.</p>
          <p className='paragraph2'>Entonces la programación llegó a mi vida...</p>
          <p className='paragraph2'>Empecé a estudiar programación web en 2021, con un auge en el sector IT, del cual yo era completo desconocido, no entendía casi la peli de Matrix, los ordenadores se me daban fatal.</p>
          <p className='paragraph2'>Mi curva de aprendizaje la inicié con la recomendación de un amigo, empecé buscando información en internet, papá Google, ¿Qué es la programación?, ¿Qué es el Back-end?, ¿Qué es un código, un algoritmo o una etiqueta?</p>
          <p className='paragraph2'>Empecé desde donde se ha de empezar, desde el principio, miré, busqué, leí y traté de comprender lo que encontraba, para poder ir paso a paso y una vez empecé a formar una estructura lógica en mi mente, pude ver algo de luz en un mundo lleno de sombras.</p>
          <p className='paragraph2'>Continué con pequeños cursos de maquetación de HTML y CSS básico, terminando de entender lo que hacia con una herramienta llamada editor de código que no había usado nunca y que tenia tantas opciones desconocidas que abrumaba. Pero no desistí, ni me rendí, al contrario, quería saber más, y no estaba contento si quería hacer algo y no podía por falta del no saber.</p>
          <p className='paragraph2'>Bootcamp, la palabra que más de uno ha escuchado de la mano de la programación. Yo decidí hacer un bootcamp presencial (aparte de estar trabajando como autónomo +8 horas al día e intentar conciliar pues también soy padre). Pues lo hice, con mucha ayuda, muchísima, pero conseguí realizar el proyecto fullstack en cuestión de 6 meses, y lo más increíble que a las 2 semanas me llaman para trabajar, flipante.</p>
          <p className='paragraph2'>Me siento muy orgulloso de lo que he conseguido, de los proyectos que he hecho y sigo haciendo, de lo aprendido y lo que me voy llevando de este mundo tan increíble, tan creativo, tan enorme.</p>
          <p className='paragraph2'>Eso sí voy a recalcar que nunca lo hubiera logrado solo.</p>

          <div className='list2AboutMe'>
            <ul className='unorderlistWorkingCode'>
              <li className='listStudyCode'>He podido trabajar profesionalmente con:</li>
              <strong className='italicText'> HTML | CSS | JavaScript | PHP | Laravel | Bitbucket | Fork | Bootstrap | Jquery | MySQL | Gulp </strong>
              <li className='listStudyCode'>He creado proyectos con: </li>
              <strong className='italicText'> HTML | CSS | JavaScript | React | Bootstrap| Github | VS Code </strong>
              <li className='listStudyCode'>He diseñado Webs con: </li>
              <strong className='italicText'> Figma | Canva </strong>
            </ul>
          </div>

          <div className='flexTitleAndList'>
            <h4>Para todo esto tuve que hacer los siguientes estudios:</h4>
              <div className='flexlistAndImg'>
                <ul className='unorderListStudyCode'>
                  <li className='listStudy'>Bootcamp FullStack + Proyecto</li>
                  <li className='listStudy'>Diseño de UX/UI + Figma (prototypes)</li>
                  <li className='listStudy'>Design Web Responsive</li>
                  <li className='listStudy'>Javascript ES6 + React (DOM, Routes, Hooks)</li>
                </ul>
              {/* <div className='imgAlvaroWrapp'>
                <img className='imgAlvaroTrainer' src={codeAboutMe} alt="alvaroTrainer"/>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <AsideSocialMedia/>
    </div>
  )
}
