import Header from './components/header/header'
import Portada from './components/sections/portada'
import Galeria from './components/sections/galeria'
import Habitaciones from './components/sections/habitaciones'
import Nosotros from './components/sections/nosotros/indes'
import Servicios from './components/sections/servicios'
import WhatsappFix from './components/whatsappFix/WhatsappFix'
import Contacto from './components/sections/contacto'

function App() {

  return (
    <>
      <Header/>
      <Portada/>
      <WhatsappFix/>
      <Habitaciones/>
      <Galeria/>
      <Servicios/>
      <Nosotros/>
      <Contacto/>
    </>
  )
}

export default App
