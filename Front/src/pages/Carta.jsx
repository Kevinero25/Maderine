import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useState } from "react";


function Carta() {
    const [categoria, setCategoria] = useState("Cafés");
    const filtrados = productos.filter((producto) => producto.categoria === categoria);

    return (
        <main>

            <Header />
            <Hero />
            
            <button onClick={() => setCategoria("Cafés")}>Cafés</button>
            <button onClick={() => setCategoria("Dulces")}>Dulces</button>
            <button onClick={() => setCategoria("Bebidas")}>Bebidas</button>
            <button onClick={() => setCategoria("Salados")}>Salados</button>

            {filtrados.map((producto) => (
                <ProductoCard key={producto.id} {...producto} />
            ))}



        </main>
    )
}
export default Carta