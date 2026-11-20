


function Carrito ({carrito}){
    return(
        <div>
            <h1>Mi pedido</h1>
            {carrito.map((producto)=>(
                <p key={producto.id}>{producto.nombre}- ${producto.precio}</p>
            ))}
        </div>
    )
}

export default Carrito