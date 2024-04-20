import { FaShower } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { MdKitchen } from "react-icons/md";
import { MdOutlineSurfing } from "react-icons/md";
const Servicios = () => {
    return (
        <section className="py-6 text-center bg-primary" id="servicios">
            <h2 className="text-3xl font-medium">Servicios</h2>
            <div className="">
                <ul className="flex justify-evenly flex-wrap">
                    <li className="rounded-xl bg-secondary py-5 m-4">
                        <FaWifi className="p-4 w-48 h-24" />
                        <h4 className=" bg-primary/50 b-10 font-bold py-1.5">
                            Zona de Wi-Fi
                        </h4>
                    </li>
                    <li className="rounded-xl bg-secondary py-5 m-4">
                        <FaShower className="p-4 w-48 h-24" />
                        <h4 className=" bg-primary/50 b-10 font-bold py-1.5">
                            Duchas calientes 24/7
                        </h4>
                    </li>
                    <li className="rounded-xl bg-secondary py-5 m-4">
                        <GiPoliceOfficerHead className="p-4 w-48 h-24" />
                        <h4 className=" bg-primary/50 b-10 font-bold py-1.5">
                            Seguridad 24/7
                        </h4>
                    </li>
                    <li className="rounded-xl bg-secondary py-5 m-4">
                        <MdKitchen className="p-4 w-48 h-24" />
                        <h4 className=" bg-primary/50 b-10 font-bold py-1.5">
                            Cocina compartida
                        </h4>
                    </li>
                    <li className="rounded-xl bg-secondary py-5 m-4">
                        <MdOutlineSurfing className="p-4 w-48 h-24" />
                        <h4 className=" bg-primary/50 b-10 font-bold py-1.5">
                            Alq. de Equipamiento
                        </h4>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Servicios;
