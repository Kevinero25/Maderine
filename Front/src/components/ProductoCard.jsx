function ProductoCard({nombre, precio, agotado,descripcion,imagen}){
    return(
        <article>
            <h3>{nombre}</h3>
            <img src={imagen} alt={nombre} />
            <p>{descripcion}</p>
            <p>${precio}</p>
            {agotado && <span>Agotado</span>}
        </article>
    );
}

export default ProductoCard