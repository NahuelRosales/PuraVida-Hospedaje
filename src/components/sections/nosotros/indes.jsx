import NosotrosImg from "../../../../public/nosotros.jpg";

const Nosotros = () => {
    return (
        <section className="py-6 mx-14 text-center">
            <h2 className="text-3xl font-medium">Nosotros</h2>
            <div className="my-7 py-7 relative">
                <h3 className="bg-secondary text-left text-2xl font-semibold py-2 px-7 size-fit ml-[8.5%]">
                    ¿Quiénes somos?
                </h3>
                <p className="bg-secondary text-lg text-left py-1 px-7 mx-[7%] my-10">
                    Nuestro compromiso con la sostenibilidad ambiental y la
                    preservación de este entorno único se refleja en cada
                    aspecto de nuestro funcionamiento. Desde el diseño de
                    nuestras instalaciones hasta nuestras prácticas diarias, nos
                    esforzamos por minimizar nuestro impacto en el medio
                    ambiente mientras brindamos el máximo confort a nuestros
                    huéspedes. En EL PURA VIDA, valoramos la
                    comunidad y la conexión humana. Nuestro espacio está
                    diseñado para fomentar la camaradería entre los viajeros, ya
                    sea compartiendo historias alrededor de una fogata bajo las
                    estrellas o surfeando las olas de renombre mundial de Playa
                    Avellanas juntos. Nuestro equipo dedicado está aquí para
                    asegurarse de que su estancia sea inolvidable. Ya sea que
                    esté buscando la emoción de la aventura al aire libre o la
                    relajación total en la playa, estamos aquí para ayudarlo a
                    aprovechar al máximo su tiempo con nosotros. ¡Esperamos
                    darle la bienvenida a EL PURA VIDA y
                    compartir la belleza y la hospitalidad de Playa Avellanas
                    con usted! ¡Pura vida!
                </p>
                <img
                    src={NosotrosImg}
                    alt="nosotros.jpg"
                    className="w-full absolute object-center h-full top-0 -z-10"
                />
            </div>
        </section>
    );
};

export default Nosotros;
