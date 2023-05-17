//import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const Gifgrid = ({ category }) => {


    const { images, isLoading } = useFetchGifs(category);

    /* const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();

    }, []) */

    return (
        <>
            <h3> {category} </h3>
            {
                isLoading && (<h2>Cargando ...</h2>)
            }

            <div className="card-grid">
                {images.map((props) => (
                    <GifItem key={props.id} {...props} />
                ))}
            </div>
        </>
    )
}

Gifgrid.propTypes = {
    category: PropTypes.string.isRequired,
}
