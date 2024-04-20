import { string } from "prop-types";

import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
const Header = () => {
    return (
        <header>
            <nav className="flex items-center justify-between w-full py-2.5 text-lg fixed top-0 z-10 text-white bg-primary opacity-80">
                <div className="pl-3.5 lg:pl-16">
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration={500}
                        className="font-bold"
                    >
                        Pura Vida Hospedaje
                    </Link>
                </div>
                <GiHamburgerMenu className="w-20 text-3xl lg:hidden" />

                <ul className="lg:flex hidden items-center px-4 mx-4 w-8/12 justify-evenly font-medium">
                    <li>
                        <Link
                            to="habitaciones"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                        >
                            Habitaciones
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="galeria"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                        >
                            Galería
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="servicios"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                        >
                            Servicios
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="nosotros"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                        >
                            Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contacto"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                        >
                            Contacto
                        </Link>
                    </li>
                    <li className="flex text-3xl w-20 justify-around text-white">
                        <Link to="http://www.facebook.com">
                            <RiFacebookBoxFill />
                        </Link>
                        <Link to="http://www.instagram.com">
                            <RiInstagramLine />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

Header.propTypes = {
    id: string.isRequired,
};

export default Header;
