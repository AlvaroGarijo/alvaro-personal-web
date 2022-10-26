import './Navbar.css';
import logoAlvaro from './images/logoAlvaro.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {


  return (
    <>
        <nav className='navbarControl'>
            <div className='unorderListContainer'>
                <ul className='listWrapper'>
                    <Link to="/" ><img className= 'logoAlvaroWeb' src={logoAlvaro} alt="logoAlvaro"></img></Link>
                    <Link className='navbarList' to="/aboutMe">Sobre mi</Link>
                    <Link className='navbarList' to="/webProjects">Proyectos Web</Link>
                    <Link className='navbarList' to="/design">Diseños</Link>
                    <Link className='navbarList' to="trainingCode">Training | Code</Link>
                    <Link className='navbarList' to="/contact">Contacto</Link>
                </ul>
            </div>
        </nav>
    </>
  )
}
