import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";

function Carta(){
    return(
        <main>
            {productos.map((producto)=> (
            <ProductoCard key={producto.id} {...producto}/>
        ))}
        </main>
    )}
export default Carta