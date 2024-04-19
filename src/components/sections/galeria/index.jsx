import Button from "../../../commons/button";
import { IMAGES } from "../../../constants/images";
import "./index.scss";

const Galeria = () => {
    return (
        <section className="py-6 text-center mx-10 gallery">
            <h2 className="text-3xl font-medium">Galería</h2>
            <ul className="flex flex-wrap pt-7 pb-5">
                <li>
                    <img
                        className="rounded-lg  max-h-full min-w-full align-bottom"
                        src={IMAGES.habitacion7img}
                        alt=""
                    />
                </li>
                <li>
                    <img
                        className="rounded-lg  max-h-full min-w-full align-bottom"
                        src={IMAGES.habitacion8img}
                        alt=""
                    />
                </li>
                <li>
                    <img
                        className="rounded-lg  max-h-full min-w-full align-bottom"
                        src={IMAGES.habitacion9img}
                        alt=""
                    />
                </li>
                <li>
                    <img
                        className="rounded-lg  max-h-full min-w-full align-bottom"
                        src={IMAGES.habitacion10img}
                        alt=""
                    />
                </li>
            </ul>
            <Button text={"Ver Más"}/>
        </section>
    );
};

export default Galeria;
