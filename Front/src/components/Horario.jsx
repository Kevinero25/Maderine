import { useState } from "react"
import "./Horario.css"

const horas = ["16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"]

function Horario() {
    const [horaElegida, setHoraElegida] = useState("")
    return (

        <div>
            {horas.map((hora) => (
                <button
                    key={hora}
                    className={hora ===  horaElegida ? "hora_activa" : "hora"}
                    onClick={()=> setHoraElegida(hora)}
                    >

                    {hora}

                </button>
            ))}
        </div>
    )
}

export default Horario