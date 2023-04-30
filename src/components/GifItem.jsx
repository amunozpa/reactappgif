import PropTypes from "prop-types"


export const GifItem = ({ url, title }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p p > {title} </p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}