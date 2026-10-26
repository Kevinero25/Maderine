import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import Header from "../components/Header";
function Carta() {
    return (

        <main>
            <Header />
            {productos.map((producto)=> (
            <ProductoCard key={producto.id} {...producto}/>
        ))}
        </main>
    )
}
export default Carta