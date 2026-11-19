import "./Header.css"
import { useNavigate } from "react-router-dom"
function Header({ cantidad }) {
    const navegar = useNavigate()
    return (
        <header className="header_Header">
            <div className="container_Header">
                <span className="nombre_Header">Maderine</span>
                <span className="subtitulo_Header">CAFETERÍA . LOS BANCOS</span>
            </div>

            <button className="carrito_Header" onClick={() => navegar("/carrito")} disabled={cantidad === 0} >🛒{cantidad}</button>
        </header>
    )
}

export default Header