import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
        <nav>
            <div className='navbarControl'>
                <ul>
                    <Link to="/aboutMe">Sobre mi</Link>
                    <Link to="/webProjects">Proyectos Web</Link>
                    <Link to="/design">Diseños</Link>
                    <Link to="trainingCode">Training | Code</Link>
                    <Link to="/contact">Contacto</Link>
                </ul>
            </div>
        </nav>
    </>
  )
}
