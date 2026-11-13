import "./Header.css"

function Header({cantidad}){
    return(
        <header className="header_Header">
            <div className="container_Header">
                <span className="nombre_Header">Maderine</span>
                <span className="subtitulo_Header">CAFETERÍA . LOS BANCOS</span>
            </div>

            <button className="carrito_Header">🛒{cantidad}</button>
        </header>
    )
}

export default Header