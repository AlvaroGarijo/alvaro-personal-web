import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <div className='footerWrapper'>
      <div className='organizationFooter'>
        <ul className='unorderListFooter'>
          <Link className='footerList' to="/aboutme">Sobre mi</Link>
          <Link className='footerList' to="/webProjects">Proyectos Web</Link>
          <Link className='footerList' to="/design">Diseños</Link>
          <Link className='footerList' to="/trainingCode">Training | Code</Link>
          <Link className='footerList' to="/contact">Contacto</Link>
        </ul>
      </div>
      <div className='footerParag'>
        <p className='textFooter'>Alvaro Garijo web developer | personal trainer 2022 &copy; be happy, only have one life.</p>
      </div>
    </div>
  )
}
