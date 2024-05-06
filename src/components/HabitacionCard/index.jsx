import { object } from "prop-types";

import { GoPersonFill } from "react-icons/go";
import { FaShower } from "react-icons/fa6";
import { PiCoffeeFill } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { GiBarbecue } from "react-icons/gi";
import "./styles.scss";

const HabitacionCard = ({ habitacion }) => {
    return (
        <div className="bg-white rounded-2xl w-96 m-5 overflow-hidden habitacion-card">
            <img src={habitacion.img} alt="" className="h-72" />
            <p className="habitacion__detalle px-3.5 py-14 top-0 font-bold">
                {habitacion.detalle}
            </p>
            <div className="px-[3%]">
                <h3 className="py-3.5 font-medium text-2xl">
                    {habitacion.name}
                </h3>
                <ul className="flex justify-evenly mb-3">
                    {habitacion.desc.map((item, i) => (
                        <li className="w-[20%]" key={i}>
                            {(item === "x2" ||
                                item === "x4" ||
                                item === "x6" ||
                                item === "x8") && (
                                <div>
                                    <GoPersonFill className="m-auto rounded-full bg-secondary p-1.5 w-10 h-10" />
                                    {item}
                                </div>
                            )}

                            {item === "Desayuno" && (
                                <div>
                                    <PiCoffeeFill className="m-auto rounded-full bg-secondary p-1.5 w-10 h-10" />
                                    {item}
                                </div>
                            )}
                            {item === "Wi-Fi" && (
                                <div>
                                    <FaWifi className="m-auto rounded-full bg-secondary p-1.5 w-10 h-10" />
                                    {item}
                                </div>
                            )}
                            {item === "Privado" && (
                                <div>
                                    <FaShower className="m-auto rounded-full bg-secondary p-1.5 w-10 h-10" />
                                    {item}
                                </div>
                            )}
                            {item === "Asador" && (
                                <div>
                                    <GiBarbecue className="m-auto rounded-full bg-secondary p-1.5 w-10 h-10" />
                                    {item}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

HabitacionCard.propTypes = {
    habitacion: object.isRequired,
};

export default HabitacionCard;
