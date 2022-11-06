import React from 'react'
import { Link } from 'react-router-dom'
import{ TbArrowBackUp } from 'react-icons/tb'
import clock from '../../gifs/reloj.gif'
import bag from '../../gifs/maleta.gif'
import training from '../../gifs/entrenar.gif'
import tired from '../../gifs/tired.gif'
import eatGoku from '../../gifs/comerGoku.gif'
import gymBro from '../../gifs/gymBro.gif'
import './styleBlog/CosasATenerEnCuentaGym.css'

export const CosasATenerEnCuentaGym = () => {
  return (
    <div className='blogWrapper'>
        <h4 className='titleAreaBlog'>Training Blog</h4>
        <h3 className='titleBlog'>6 Detalles a priorizar para ir al gimnasio</h3>
        <div className='containerWrapperBlog'>
            <h4 className='subtitleBlog'> 1º Tiempo</h4>
            <img className='gifClockThings' src={clock} alt='clockGif'/>
              <p className='paragBlog'>La clave del éxito siempre dicen que es la constancia, pero para que exista constancia, debe haber organización.</p>
              <p className='paragBlog'>Cuando una persona se organiza su tiempo de forma ordenada, tendrá la capacidad de priorizar en lo que realmente va a realizar con su tiempo, y si esto mismo lo llevamos al gimnasio, seguro que tienes las de ganar. </p>
              <br/>
              <p className='paragBlog'><strong>¿Pero, cómo organizo mi tiempo?</strong></p>
              <p className='paragBlog'>Pues muy sencillo, lo que tienes que intentar es formarte un horario en el calendario, empezar de menos a más, por ejemplo, voy a ir 3 veces por semana a "X" horas determinadas, apuntarlo y cumplirlo cual obligación, como si fuese tu trabajo. De esta manera te impones a ti mismo/a el tener que entrenar, moverte y realizar alguna actividad.</p>
            
            <h4 className='subtitleBlog'>2º Preparación</h4>
            <img className='gifBagThings' src={bag} alt='bagGif'/>
             <p className='paragBlog'>No dejes nada para última hora, prepara maleta, entreno que te toca, agua, toalla, todo lo necesario para esa sesión de entrenamiento en la que vas a darlo todo.</p>
             <p className='paragBlog'>Prepararse tiene que ser algo rutinario, algo necesario para que tu mente esté relajada y tenga todo controlado, de esta manera te preocuparás de cosas más importantes y no de si se te han olvidado los calcetines o la camiseta por las prisas.</p>
            
            <h4 className='subtitleBlog'>3º Programa de entrenamiento</h4>
            <img className='gifTrainingThings' src={training} alt='trainingGoku'/>
            <p className='paragBlog'>En este caso tienes 3 opciones:</p>
            <br/>
             <h4 className='paragBlog'>Prepara tus propias sesiones y estudia: </h4>
             <p className='paragBlog'>Prepara tus sesiones con estudio autodidácta, hoy en día hay mucha información sobre entrenamientos de calidad (aunque hay que saber buscar bien, no olvides que "juegas con tu salud") hay muchos canales con entrenadores que te explican y desarrollan ejercicios, movimientos y técnicas muy útiles. Aunque cuidado que hay de todo (bueno y malo).</p>
             <p className='paragBlog'>Aunque yo no te lo recomiendo si estás empezando, si es así busca ayuda profesional cualificada ya que ellos te ayudarán a conocer tus tiempos, tu margen de peso y tus opciones de metodología a seguir. Déjate aconsejar.</p>
             <br/>
             <h4 className='paragBlog'>Asesórate de un profesional cualificado: </h4>
             <p className='paragBlog'>Esta es la opción más habitual, en todos los centros deportivos hay personal que te puede ayudar con tus entrenamientos, cada vez más gimnasios apuestan por calidad en su personal y eso al final ayuda a que el fitness avance por buen camino.</p>
             <p className='paragBlog'>También es importante que te asesoren para evitar lesiones, molestias, sobreentrenamientos o pájaras, ten en cuenta que lo perfecto no existe, pero podemos controlar intensidades, técnicas y recursos.</p>
             <br/>
             <h4 className='paragBlog'>Contrata a personal cualificado: </h4>
             <p className='paragBlog'>Cada vez más demandados en el mercado, la figura del entrenador personal es cada vez más habitual en el panorama, el sector ha ido ayudando a esta figura por la capacidad de adaptación hacia el cliente y la capacidad de conseguir resultados <span className='crossOutText'>en relativo poco tiempo</span> (el tiempo de lograr los objetivos dependerá de multitud de aspectos).</p>
             <p className='paragBlog'>Un buen entrenador personal se adaptará a tus necesidades, a tus tiempos, a tu técnica y creará un método de trabajo en torno a tus objetivos, esto hará que mejores enormemente, más rápido y con mayor seguridad.</p>
           
           <h4 className='subtitleBlog'>4º Ganas y Energía</h4>
           <img className='gifTiredThings' src={tired} alt='tiredGif'/>
              <p className='paragBlog'>No todos los días uno/a se levanta de la misma forma, ya que habrá días en los que te comas el mundo y días que te sobran 20 horas, y es muy difícil lidiar con ello, por eso es importante tener técnicas de motivación durante tu sesión de entrenamiento ya sea con tu entrenador que te anime, tu compi de entreno o con tu música más cañera.</p>
          
            <h4 className='subtitleBlog'>5º Nutrición</h4>
            <img className='gifEatThings' src={eatGoku} alt='eatGif'/>
              <p className='paragBlog'>La suplementación NO ES OBLIGATORIA para hacer crecer tus musculos, pero ayuda. Lo más importante es que tengas un control nutricional diario acorde con tu objetivo deportivo|saludable.</p>
              <p className='paragBlog'>Por ejemplo si quieres bajar de peso, busca el déficit calórico, si quieres realizar volumen, busca un superavit, trata de cuidarte por fuera y por dentro, juega con la comida en base a tu salud sobre todo, ya que al final es lo más importante.</p>
              <p className='paragBlog'>Os comentaré más cositas de suplementación en otra entrada en el blog.</p>
            
            <h4 className='subtitleBlog'>6º Compañía</h4>
            <img className='gifGymBroThings' src={gymBro} alt='gymBroGif'/>
              <p className='paragBlog'>Hay quienes buscan estar solos/as consigo mismos/as y quienes buscan socializar, o quienes siempre van con su compañero/a porque les va bien desde hace tiempo. Trata de disfrutar cada vez que entrenes, ya sea solo o acompañado, debe ser una rutina de "disfrute" ya me entiendes...</p>
              <p className='paragBlog'>Por ello busca tu mejor lista de música o la mejor conversación con tu "gym-bro" pero disfruta de lo que hagas con quien lo hagas, es una de las claves para poder avanzar hacia tus objetivos.</p>
        </div>
        <div className='linkComeBackBlog'>
          <Link to='/trainingCode' className='linkComeBackDesigns'> <TbArrowBackUp/> Vuelve a Training | Code </Link>
        </div>


        <p className='paragBlog'></p>
    </div>
  )
}
