import { Routes, Route } from "react-router-dom"
import Carrito from "./pages/Carrito"
import Carta from "./pages/Carta"
import { useState } from "react"

function App() {
  const [carrito,setCarrito]= useState([])
  return (
    <Routes>
      <Route path="/" element={<Carta carrito={carrito} setCarrito={setCarrito} />} />
      <Route path="/carrito" element={<Carrito carrito={carrito} />} />
    </Routes>
  )


}

export default App
