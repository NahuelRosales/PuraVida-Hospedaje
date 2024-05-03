import WhatsappIcon from "../../../public/WhatsApp.svg";

const WhatsappFix = () => {
    return (
        <div>
            <img
                src={WhatsappIcon}
                alt="whatsapp-icon"
                className="fixed cursor-pointer w-16 h-16 right-10 bottom-10 z-50"
                onClick={() => (window.open('https://wa.me/1565748724?text=Hola%20Nauwu%20estoy%20en%20tu%20appr%20gg'))}
            />
        </div>
    );
};

export default WhatsappFix;
