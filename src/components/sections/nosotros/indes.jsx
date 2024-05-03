import Portada from "../../../../public/portada.jpg";

const Nosotros = () => {
    return (
        <section className=" text-center" id="nosotros">
            <div className="flex relative max-h-fit">
                <div className="absolute py-7 backdrop-blur">
                    <h2 className="">Nosotros</h2>
                    <h3 className="  text-left text-2xl font-semibold py-2 mx-[7%]">
                        ¿Quiénes somos?
                    </h3>
                    <p className=" text-lg text-left py-1 mx-[7%] my-10">
                        En <b>Pura Vida</b>, fusionamos la tranquilidad tropical
                        con la hospitalidad costarricense para ofrecerte una
                        experiencia única. <br />
                        <br />
                        Nuestro hospedaje te sumerge en la belleza natural de la
                        zona, mientras nuestro equipo se esfuerza por brindarte
                        comodidad y atención personalizada. <br />
                        <br />
                        Desde nuestras habitaciones acogedoras hasta nuestras
                        áreas comunes bien cuidadas, cada detalle está pensado
                        para que disfrutes al máximo tu estancia. ¡Descubre la
                        esencia de la Pura Vida con nosotros!
                    </p>
                </div>
            </div>
            <img
                src={Portada}
                alt=""
                className="w-full object-center h-screen top-0 -z-10"
            />
        </section>
    );
};

export default Nosotros;
