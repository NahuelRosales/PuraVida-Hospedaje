import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
    return (
        <section className="py-7 text-center bg-primary space-y-3.5 px-3.5">
            <div className="flex text-3xl justify-center text-white space-x-3.5">
                <RiFacebookBoxFill />
                <RiInstagramLine />
            </div>
            <p>
                Calle Ent. Avellanas 58, Guanacate, Costa Rica | +506 8
                5689-4123 | email: puravida@hospedaje.com
            </p>
            <p className="font-medium">
                Copyright © 2024 | Caminando Webs
            </p>
        </section>
    );
};

export default Footer;
