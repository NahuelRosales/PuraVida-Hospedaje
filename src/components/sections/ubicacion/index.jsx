import React from "react";

const Ubicacion = () => {
    return (
        <section className="pb-7 text-center">
            <h3 className="text-3xl font-medium pb-7">Ubicación:</h3>
            <div className="flex flex-wrap justify-evenly lg:flex-row-reverse">
                <iframe
                    className="mb-7 mx-7 lg:w-7/12 w-full h-96 rounded-xl"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31411.165069190403!2d-85.8499752090827!3d10.229640513955335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e475eab4e20e1%3A0x8f74be8f4a580077!2sEnt.%20a%20Avellanas%2C%20Provincia%20de%20Guanacaste%2C%20Santa%20Cruz%2C%20Costa%20Rica!5e0!3m2!1ses!2sar!4v1713582338720!5m2!1ses!2sar"
                ></iframe>
                <div className="mx-14 lg:w-3/12 lg:my-7 lg:mr-0">
                    <p className="border-2 p-2 border-text rounded-xl font-medium">
                        Nos encontramos a 50 metros de la playa Avellanas en
                        Ent. Avellanas 58, Guanacaste, Costa Rica
                    </p>

                    <ul className="text-left pl-2 list-disc space-y-1 lg:ml-3.5">
                        <p className="my-3.5 font-medium text-xl text-left">
                            Lugares cercanos:
                        </p>
                        <li>Playa Avellana</li>
                        <li>Pinilla Canopy Club</li>
                        <li>Parque Nacional Marino Las Baulas de Guanacaste</li>
                        <li>Playa Negra</li>
                        <li>Playa Blanca</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Ubicacion;
