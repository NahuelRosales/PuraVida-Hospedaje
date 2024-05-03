import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import WhatsappIcon from "../../../../public/WhatsApp.svg";

const Contacto = () => {
    return (
        <section className="py-6 text-center " id="contacto">
            <h2 className="">Contacto</h2>
            <div className="flex mx-7 sm:mx-0 my-3.5 flex-wrap sm:justify-between">
                <div className="mx-14 my-3.5">
                    <p className="mb-2 font-bold text-left">
                        Llamadas o Whatsapp:
                    </p>
                    <div className="flex items-center" onClick={() => (window.open('https://wa.me/1565748724?text=Hola%20Nauwu%20estoy%20en%20tu%20appr%20gg%20.%20Me%20gustaría%20saber%20los%20precios%20de%20las%20habitaciones%20compartidas.'))}>
                        <img src={WhatsappIcon} alt="" className="w-7 h-7" />{" "}
                        <p className="m-1 font-medium">+506 8 5689-4123</p>
                    </div>
                </div>
                <div className="mx-14 my-3.5">
                    <p className="mb-2 font-bold text-left">Redes sociales:</p>
                    <div className="flex items-center">
                        <RiFacebookBoxFill className="w-7 h-7 text-facebook" />
                        <p className="m-1 font-medium">
                            El Pura Vida Hospedaje
                        </p>
                    </div>
                    <div className="flex items-center">
                        <RiInstagramLine className="w-7 h-7 text-instagram" />
                        <p className="m-1 font-medium">@elpuravida_hospedaje</p>
                    </div>
                </div>
                <div className="mx-14 my-3.5">
                    <p className="mb-2 font-bold text-left">Email:</p>
                    <div className="flex items-center">
                        <MdOutlineMail className="w-7 h-7" />
                        <p className="m-1 font-medium">
                            elpuravida@hospedaje.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
