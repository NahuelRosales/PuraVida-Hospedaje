import NosotrosImg from "../../../../public/nosotros.jpg";

const Nosotros = () => {
    return (
        <section className="py-6 sm:mx-14 text-center" id="nosotros">
            <h2 className="text-3xl font-medium">Nosotros</h2>
            <div className="my-7 sm:py-7 relative">
                <h3 className="bg-secondary text-left text-2xl font-semibold py-2 px-7 size-fit ml-[8.5%]">
                    ¿Quiénes somos?
                </h3>
                <p className="bg-secondary text-lg text-left py-1 px-7 mx-[7%] my-10">
                    Nuestro compromiso con la sostenibilidad ambiental y la
                    preservación de este entorno único se refleja en cada
                    aspecto de nuestro funcionamiento. <br /> Desde el diseño de
                    nuestras instalaciones hasta nuestras prácticas diarias, nos
                    esforzamos por minimizar nuestro impacto en el medio
                    ambiente mientras brindamos el máximo confort a nuestros
                    huéspedes. <br /> En <b>Pura Vida hospedaje</b>, valoramos la
                    comunidad y la conexión humana. 
                </p>
                <img
                    src={NosotrosImg}
                    alt="nosotros.jpg"
                    className="w-full absolute object-center hidden sm:block h-full top-0 -z-10"
                />
            </div>
        </section>
    );
};

export default Nosotros;
