import { useState } from "react"

const horas = ["16:00", "16:30", "17:00","17:30","18:00","18:30","19:00","19:30","20:00"]

function Horario(){
    return(
        <div>
            {horas.map((hora)=>(
                <button key={hora}>{hora}</button>
            ))}
        </div>
    )
}

export default Horario