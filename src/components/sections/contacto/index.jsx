import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import WhatsappIcon from "../../../../public/WhatsApp.svg";

const Contacto = () => {
    return (
        <section className="py-6 text-center ">
            <h2 className="text-3xl font-medium">Contacto</h2>
            <div className="flex mx-7 sm:mx-0 my-3.5 flex-wrap sm:justify-between">
                <div className="mx-14 my-3.5">
                    <p className="mb-2 font-bold text-left">
                        Llamadas o Whatsapp:
                    </p>
                    <div className="flex items-center">
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
