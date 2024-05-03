import Header from "./components/header/header";
import Portada from "./components/sections/portada";
import Habitaciones from "./components/sections/habitaciones";
import Nosotros from "./components/sections/nosotros/indes";
import Servicios from "./components/sections/servicios";
import Galeria from "./components/sections/galeria";
import WhatsappFix from "./components/whatsappFix/WhatsappFix";
import Contacto from "./components/sections/contacto";
import Ubicacion from "./components/sections/ubicacion";
import Pago from "./components/sections/pago";
import Footer from "./components/footer";


function App() {
    return (
        <>
            <Header />
            <Portada />
            <WhatsappFix />
            <Habitaciones />
            <Galeria/>
            <Servicios />
            <Nosotros />
            <Contacto />
            <Pago />
            <Ubicacion />
            <Footer />
        </>
    );
}

export default App;
