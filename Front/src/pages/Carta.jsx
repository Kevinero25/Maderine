import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useState } from "react";
import "./Carta.css"


function Carta() {
    const [categoria, setCategoria] = useState("Cafés");
    const filtrados = productos.filter((producto) => producto.categoria === categoria);

    return (
        <main>

            <Header />
            <Hero />

            <div className="botonera_carta">
                <button className="boton_Cafés" onClick={() => setCategoria("Cafés")}>Cafés</button>
                <button className="boton_Dulces" onClick={() => setCategoria("Dulces")}>Dulces</button>
                <button className="boton_Bebidas" onClick={() => setCategoria("Bebidas")}>Bebidas</button>
                <button className="boton_Salados" onClick={() => setCategoria("Salados")}>Salados</button>
            </div>

            {filtrados.map((producto) => (
                <ProductoCard key={producto.id} {...producto} />
            ))}



        </main>
    )
}
export default Carta