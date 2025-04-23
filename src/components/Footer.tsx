import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-300 text-sm py-6">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6">
                {/* Sección de Redes Sociales */}
                <div>
                    <h3 className="font-semibold mb-4">Redes sociales</h3>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook" className="text-black hover:text-gray-600">
                            <FaFacebookF className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-black hover:text-gray-600">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                      
                    </div>
                </div>

                {/* Sección de Información de Contacto */}
                <div>
                    <h3 className="font-semibold mb-4">Información de contacto</h3>
                    <p>+54 9 (11) 2387-57xx</p>
                    <p> juzgado@hotmail.com </p>
                    <p> Juzgado de Paz Lego N°3 esta ubicado: </p>
                    <p> En el edificio del Cepar Sur en la Ortiz de Ocampo 2247 </p>
                   
                </div>

                {/* Sección del Formulario */}
                <div>
                    <h3 className="font-semibold mb-4">¡Escribinos!</h3>
                    <p className="mb-4">Dejá tus datos y nos pondremos en contacto con vos.</p>
                    <form>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="w-full p-2 mb-3 border border-gray-300 rounded-md"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 mb-3 border border-gray-300 rounded-md"
                        />
                        <input
                            type="tel"
                            placeholder="Teléfono"
                            className="w-full p-2 mb-3 border border-gray-300 rounded-md"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>

            {/* Línea inferior con enlaces */}
            <div className="text-center border-t border-gray-300 mt-6 pt-4">
                <p className="text-gray-500">
                    Todos los derechos reservados 2025 &copy; Juzgado de Paz Lego N°3
                </p>
            </div>
        </footer>
    );
};

export default Footer;
