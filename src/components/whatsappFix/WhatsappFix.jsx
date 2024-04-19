import WhatsappIcon from "../../../public/WhatsApp.svg";

const WhatsappFix = () => {
    return (
        <div>
            <img
                src={WhatsappIcon}
                alt=""
                className="fixed w-16 h-16 right-10 bottom-10 z-50"
            />
        </div>
    );
};

export default WhatsappFix;
