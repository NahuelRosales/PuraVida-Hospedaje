import HabitacionCard from "../../HabitacionCard";
import habitaciones from "../../../utils/habitaciones";
import Button from "../../../commons/button";

const Habitaciones = () => {
    return (
        <section className="py-6 mt-6 text-center" id="habitaciones">
            <h2 className="pb-7">Habitaciones</h2>
            <div className="flex justify-center flex-wrap">
                {habitaciones.map((habitacion, i) => (
                    <HabitacionCard
                        habitacion={habitacion}
                        key={i}
                    />
                ))}
            </div>
            <Button text={"CONSULTAR PRECIOS"} onClick={() => (window.open('https://wa.me/1565748724?text=Hola%20Nauwu%20estoy%20en%20tu%20appr%20gg%20.%20Me%20gustaría%20saber%20los%20precios%20de%20las%20habitaciones%20compartidas.'))}/>
        </section>
    );
};

export default Habitaciones;
