import Logo from "../../../public/logo.png";
import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";
import { IoMdImage } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaBed, FaHandHoldingHeart, FaUsers, FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { useState } from "react";
const Header = () => {
    const [showMenuBar, setShowMenuBar] = useState(false);

    return (
        <header>
            <nav className="flex flex-wrap items-center justify-between w-full py-2.5 text-xl font-semibold fixed top-0 z-20 bg-secondary opacity-95">
                <div className="grow flex lg:hidden">
                    <GiHamburgerMenu
                        onClick={() => setShowMenuBar(!showMenuBar)}
                        className={` ${
                        showMenuBar
                            ? "hidden"
                            : "w-20 text-3xl cursor-pointer"
                    }`}
                    />
                    <IoClose
                        onClick={() => setShowMenuBar(!showMenuBar)}
                        className={`${
                        showMenuBar
                            ? "w-20 text-3xl cursor-pointer"
                            : "hidden"
                    }`}
                    />
                </div>
                <div className="px-3.5 lg:pl-16 cursor-pointer">
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration={500}
                        className="font-bold"
                    >
                        <img src={Logo} alt="" className="w-28 " />
                    </Link>
                </div>

                <ul
                    className={`lg:flex lg:grow lg:w-8/12 ${
                        showMenuBar
                            ? "absolute top-12 w-[60%] h-screen min-w-80 space-y-7 p-4 pt-7 bg-secondary"
                            : "hidden"
                    } justify-start items-center lg:justify-evenly`}
                >
                    <li>
                        <Link
                            to="habitaciones"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            onClick={() => setShowMenuBar(!showMenuBar)}
                            duration={500}
                            className="cursor-pointer pl-7 flex items-center"
                        >
                            <FaBed className="mr-4 size-7 lg:hidden" />
                            Habitaciones
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="galeria"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={500}
                            onClick={() => setShowMenuBar(!showMenuBar)}
                            className="cursor-pointer pl-7 flex items-center"
                        >
                            <IoMdImage className="mr-4 size-7 lg:hidden" />
                            Galería
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="servicios"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={500}
                            onClick={() => setShowMenuBar(!showMenuBar)}
                            className="cursor-pointer pl-7 flex items-center"
                        >
                            <FaHandHoldingHeart className="mr-4 size-7 lg:hidden" />
                            Servicios
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="nosotros"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={500}
                            onClick={() => setShowMenuBar(!showMenuBar)}
                            className="cursor-pointer pl-7 flex items-center"
                        >
                            <FaUsers className="mr-4 size-7 lg:hidden" />
                            Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contacto"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={500}
                            onClick={() => setShowMenuBar(!showMenuBar)}
                            className="cursor-pointer pl-7 flex items-center"
                        >
                            <FaPhoneAlt className="mr-4 size-7 lg:hidden" />
                            Contacto
                        </Link>
                    </li>
                    <li className="hidden lg:flex text-4xl w-20 pt-14 pl-7 lg:p-0 justify-around">
                        <a href="http://www.facebook.com">
                            <RiFacebookBoxFill />
                        </a>
                        <a href="http://www.instagram.com">
                            <RiInstagramLine />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
