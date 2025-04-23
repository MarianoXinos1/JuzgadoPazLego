import { Link } from 'react-router-dom'; 
import { HamburguerMenu } from './HamburguerMenu';


export const Navbar = () => {
   
    return (
        <nav className= 'flex items-center justify-between md:justify-around bg-white m-5 '>
            <section>
                <img src='/logo.svg' alt='Logo TurnOn' className='w-[91px] h-[36px] '/>
            </section>

            <section className='hidden md:flex'>
                <ul className= 'flex space-x-4 md:space-x-8 text-p-desktop text-dark-gray'>
                    <li>
                        <Link to='/'> Inicio </Link>
                    </li>
                    <li>
                        <a href="#servicios"> Servicios </a>
                    </li>
                    <li>
                        <a href="#integrantes"> Integrantes </a>
                    </li>
                    <li>
                        <a href="#ubicacion"> Ubicación </a>
                    </li>
                    <li>
                        <a href="#consultas"> Consultas </a>
                    </li>
                </ul>
            </section>

            <section className= 'flex items-center space-x-3 md:space-x-4'>           
               
                            
                <HamburguerMenu/>
            </section>
        </nav>
    );
};
