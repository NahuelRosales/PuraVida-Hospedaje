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
            <Button text={"CONSULTAR PRECIOS"}/>
        </section>
    );
};

export default Habitaciones;
