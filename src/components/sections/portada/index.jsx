import PortadaImg from "../../../../public/portada.jpg";

import Button from "../../../commons/button";

const Portada = () => {

    return (
        <>
            <div className="relative" id="home">
                <div className="px-[12%] mt-28 backdrop-blur sm:mt-[12%]  z-10 absolute">
                    <h1 className="sm:text-6xl text-5xl  text-b">
                        Pura Vida Hospedaje
                    </h1>
                    <p className="sm:text-2xl text-xl py-5 font-medium">
                        Bienvenido a nuestro acogedor hospedaje. Contamos con
                        <b> hostel, cabañas, bungalows, glamping y camping.</b>
                        <br />
                        Nos ubicamos a metros de la playa Avellanas, en la
                        ciudad de <b>Guanacaste, Costa Rica</b>.
                    </p>
                    <Button text={"RESERVAR"} onClick={() => (window.open('https://wa.me/1565748724?text=Hola%20Nauwu%20estoy%20en%20tu%20appr%20gg'))} />
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
