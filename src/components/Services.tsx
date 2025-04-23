import img1 from '../assets/f3.jpg';
import img2 from '../assets/f4.jpg';
import img3 from '../assets/f5.jpg';
import img4 from '../assets/f6.jpg';

const Services = () => {
    const services = [
        {
            name: "Resolución de Conflictos Civiles y Comerciales",
            img: img1,
            text:
                "\"Atendemos asuntos contenciosos y de jurisdicción en materia civil y comercial, brindando soluciones efectivas para casos cuyo monto no supere los $200.000.\"",
          
        },
        {
            name: "Certificación de Firmas y Copias",
            img: img2,
            text:
                "\"Autenticamos firmas y copias de documentos para garantizar su validez legal.\"",
        },
        {
            name: "Declaraciones Juradas",
            img: img3,
            text:
                "\"Recepción y certificación de declaraciones juradas para diversos trámites legales.\"",     
        },
        {
            name: "Licencias de Conducir",
            img: img4,
            text:
                "\"Autorización para realizar licencias de conducir para adolescentes de 16 a 17 años.\"",     
        },
    ];

    return (
        <section className="bg-primary max-w-full py-10 px-4">
            <article className='max-w-full mx-auto my-10 px-4 text-center '>     
                <div className="flex flex-col gap-4 items-center">          
                    <h2 className="text-h2 font-bold font-sans"> Servicios que ofrecemos </h2>
                    <p className="max-w-md">
                        Nuestro compromiso es servir a la comunidad. Estamos aqui para escucharte, asesorarte y acompañarte en tus tramites.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                    {services.map((services, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl shadow-lg bg-gray-50 transition-transform transform hover:scale-105 hover:shadow-2xl"
                        >
                            <img
                                src={services.img}
                                alt={`Logo de ${services.name}`}
                                className="w-60 h-40 mx-auto mb-4 object-contain"
                            />
                            <h3 className="text-h3 font-sans font-bold text-black-80">
                                {services.name}
                            </h3>
                            <p className="text-gray-600 italic mt-4">{services.text}</p>
                        
                        </div>
                    ))}
                </div>
            </article>
        </section>
    );
};

export default Services;