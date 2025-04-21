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
                        <Link to='/services'> Servicios </Link>
                    </li>
                    <li>
                        <Link to='/plans'> Horarios </Link>
                    </li>
                    <li>
                        <Link to='/companies'> Integrantes </Link>
                    </li>
                </ul>
            </section>

            <section className= 'flex items-center space-x-3 md:space-x-4'>           
               
                            
                <HamburguerMenu/>
            </section>
        </nav>
    );
};
