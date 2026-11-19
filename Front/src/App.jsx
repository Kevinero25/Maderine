import {Routes,Route} from "react-router-dom"
import Carrito from "./pages/Carrito"
import Carta from "./pages/Carta"

function App() {
return(
    <Routes>
    <Route path="/" element={<Carta/>}/>
    <Route path="/carrito" element={<Carrito/>}/>
  </Routes>
)

  
}

export default App
