import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation(); // Hook para obtener la ruta actual
    const currentPath = location.pathname;

    // Función para determinar si la ruta del enlace es la ruta actual o no
    const getClassName = (path) => 
        `p-4 transition-all ${currentPath === path ? 'text-orange-400' : 'text-white'} font-bold hover:text-orange-400 hover:cursor-pointer`;

    return (
        <>
            <header className='flex min-h-[70px] items-center '>
                <div id="collapseMenu" className='flex items-center mx-auto'>
                    <ul className='flex gap-8 text-xl'>
                        <li>
                            <Link to='/' className={getClassName('/')}>Inicio</Link>
                        </li>

                        <li>
                            <Link to='/proyects' className={getClassName('/proyects')}>Proyectos</Link>
                        </li>

                        <li>
                            <Link to='/about' className={getClassName('/about')}>Sobre nosotros</Link>
                        </li>

                        <li>
                            <Link to='/contact' className={getClassName('/contact')}>Contactanos</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;
