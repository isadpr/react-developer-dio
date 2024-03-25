import "./styles.css"

// eslint-disable-next-line react/prop-types
function ItemList({ title, description, html_url }) {
    return (
        <div className="itemList">
            <a href={html_url} target="blank" rel='noreferrer'>
                <strong>{title}</strong>
            </a>
            <p>{description}</p>
            <hr />
        </div>
    )
}

export default ItemList