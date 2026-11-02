import "./ProductoCard.css"
function ProductoCard({ nombre, precio, agotado, descripcion, imagen, onAgregar }) {
    return (
        <div className="carta_ProductoCard">
            <article className="article_ProductoCard">
                <img className="img_ProductoCard" src={imagen} alt={nombre} />

                <div className="container_ProductoCard">
                    <h3 className="h3_ProductoCard">{nombre}</h3>
                    <p className="p_descripcion_ProductoCard">{descripcion}</p>
                    <div className="container_agregar">
                        <p className="p_precio_ProductoCard">${precio}</p>
                        <button onClick={onAgregar} className="boton_ProductoCard">+</button>

                    </div>
                    {agotado && <span>Agotado</span>}
                </div>
            </article>
        </div>


    );
}

export default ProductoCard