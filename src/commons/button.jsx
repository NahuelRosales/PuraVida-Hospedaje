import { func, string } from "prop-types";

const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className="text-white font-bold rounded-full text-xl px-8 py-2.5 text-center me-2 mb-2 bg-primary hover:bg-primaryHover focus:bg-primaryFocus"
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: string,
    onClick: func,
};

export default Button;
