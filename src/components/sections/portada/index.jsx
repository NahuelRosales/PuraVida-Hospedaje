import PortadaImg from "../../../../public/portada.jpg";
import Portada2Img from "../../../../public/portada2.jpg";

import Button from "../../../commons/button";

const Portada = () => {
    return (
        <>
            <div className="relative">
                <div className="px-[12%] mt-[12%] bg-secondary/30 absolute">
                    <h1 className="sm:text-6xl text-5xl font-medium text-b">
                        El Pura Vida
                    </h1>
                    <p className="sm:text-2xl text-xl py-5 font-medium">
                        Bienvenido a nuestro acogedor hospedaje. Contamos con
                        <b> HOSTEL, CABAÑAS, BUNGALOWS, GLAMPING y CAMPING</b>
                        <br />
                        Nos ubicamos a metros de la playa Avellanas, en la
                        ciudad de <b>Guanacaste, Costa Rica</b>.
                    </p>
                    <Button text="Contactarse" />
                </div>

                <div className="min-h-100vh">
                    <img
                        src={PortadaImg}
                        alt="portada.jpg"
                        className="w-full object-center min-h-screen h-full sm:h-screen top-0 -z-10 "
                    />
                </div>
            </div>
        </>
    );
};

export default Portada;
