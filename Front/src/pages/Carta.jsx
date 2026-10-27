import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import Header from "../components/Header";
import Hero from "../components/Hero";
function Carta() {
    return (

        <main>

            <Header />
            <Hero />
            {productos.map((producto) => (
                <ProductoCard key={producto.id} {...producto} />
            ))}
        </main>
    )
}
export default Carta