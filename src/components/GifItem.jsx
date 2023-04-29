
export const GifItem = ({ url, title }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p p > {title} </p>
        </div>
    )
}
