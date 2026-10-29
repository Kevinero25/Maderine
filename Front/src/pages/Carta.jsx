import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useState } from "react";
function Carta() {
    const [categoria, setCategoria] = useState("Todo");
    const filtrados = categoria === "Todo"
    ? productos
    : productos.filter((producto) => producto.categoria === categoria)

    return (
        <main>

            <Header />
            <Hero />
            <button onClick={() => setCategoria("Todo")}>Todo</button>
            <button onClick={() => setCategoria("Cafés")}>Cafes</button>
            <button onClick={()=> setCategoria("Dulces")}>Dulces</button>
            {filtrados.map((producto)=> (
                <ProductoCard key={producto.id} {...producto} />
            ))}
            <p>Categoria elegida: {categoria}</p>

        </main>
    )
}
export default Carta