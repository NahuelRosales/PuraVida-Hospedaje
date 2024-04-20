import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";

const Header = () => {
    return (
        <header className="flex items-center justify-between w-full py-2.5 text-lg fixed top-0 z-10 bg-primary opacity-80 text-white">
            <div className="pl-16">
                <h1 className="font-bold">Pura Vida Hospedaje</h1>
            </div>
            <nav className="flex items-center px-4 mx-4 w-8/12 justify-evenly font-medium">
                <h2>Habitaciones</h2>
                <h2>Galería</h2>
                <h2>Servicios</h2>
                <h2>Nosotros</h2>
                <h2>Contacto</h2>
                <div className="flex text-3xl w-20 justify-around text-white">
                    <RiFacebookBoxFill />
                    <RiInstagramLine />
                </div>
            </nav>
        </header>
    );
};

export default Header;
