import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="py-7 text-center bg-primary space-y-3.5 px-3.5">
            <div className="flex text-3xl justify-center text-white space-x-3.5">
                <a href="http://www.facebook.com">
                    <RiFacebookBoxFill />
                </a>
                <a href="http://www.instagram.com">
                    <RiInstagramLine />
                </a>
            </div>
            <p>
                Calle Ent. Avellanas 58, Guanacate, Costa Rica |{" "}
                <span
                    className="cursor-pointer"
                    onClick={() =>
                        window.open(
                            "https://wa.me/1565748724?text=Hola%20Nauwu%20estoy%20en%20tu%20appr%20gg%20.%20Me%20gustaría%20saber%20los%20precios%20de%20las%20habitaciones%20compartidas."
                        )
                    }
                >
                    +506 8 5689-4123
                </span>{" "}
                | email:{" "}
                <a href="mailto:puravida@hospedaje.com">
                    puravida@hospedaje.com
                </a>
            </p>
            <p className="font-medium">Copyright © 2024 | Caminando Webs</p>
        </footer>
    );
};

export default Footer;
