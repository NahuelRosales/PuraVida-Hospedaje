import { IoIosCash } from "react-icons/io";
import { RiBankFill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";
const Pago = () => {
  return (
    <section className="pb-7 text-center bg-secondary">
      <h3 className="text-3xl font-medium p-7">Aceptamos todos los métodos de pago:</h3>
      <div className="flex justify-around">
        <div className="w-[30%]"><IoIosCash className="w-14 h-14 m-auto"/> <p>Efectivo</p></div>
        <div className="w-[30%]"><RiBankFill className="w-14 h-14  m-auto"/><p>Transferencia</p></div>
        <div className="w-[30%]"><FaCreditCard className="w-14 h-14  m-auto"/>Crédito o Débito</div>
      </div>
    </section>
  )
}

export default Pago
