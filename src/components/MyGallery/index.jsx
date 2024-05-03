import ImageGallery from "react-image-gallery";
import habitacion1img from "../../../public/habitacion1.jpg";
import habitacion2img from "../../../public/habitacion2.jpg";
import habitacion3img from "../../../public/habitacion3.jpg";
import habitacion4img from "../../../public/habitacion4.jpg";
import habitacion5img from "../../../public/habitacion5.jpg";
import habitacion6img from "../../../public/habitacion6.jpg";
import habitacion7img from "../../../public/habitacion7.jpg";
import habitacion8img from "../../../public/habitacion8.jpg";
import habitacion9img from "../../../public/habitacion9.jpg";
import habitacion10img from "../../../public/habitacion10.jpg";
import habitacion11img from "../../../public/habitacion11.jpg";

import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
    {
        original: habitacion7img,
        thumbnail: habitacion7img,
    },
    {
        original: habitacion9img,
        thumbnail: habitacion9img,
    },
    {
        original: habitacion10img,
        thumbnail: habitacion10img,
    },
    {
        original: habitacion11img,
        thumbnail: habitacion11img,
    },
    {
        original: habitacion1img,
        thumbnail: habitacion1img,
    },
    {
        original: habitacion2img,
        thumbnail: habitacion2img,
    },
    {
        original: habitacion3img,
        thumbnail: habitacion3img,
    },
    {
        original: habitacion4img,
        thumbnail: habitacion4img,
    },
    {
        original: habitacion5img,
        thumbnail: habitacion5img,
    },
    {
        original: habitacion6img,
        thumbnail: habitacion6img,
    },
];

const MyGallery = () => {
    return (
        <div>
            <ImageGallery items={images} />;
        </div>
    );
};

export default MyGallery;
