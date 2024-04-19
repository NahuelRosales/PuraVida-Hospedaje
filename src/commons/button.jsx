import { string } from "prop-types"

const Button = ({text}) => {
    return (
        <button
            type="button"
            className="text-white font-bold rounded-full text-xl px-8 py-2.5 text-center me-2 mb-2 bg-primary hover:bg-primaryHover focus:ring-primaryFocus"
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: string.isRequired
}

export default Button;
