
import "./AvisoTope.css"

function AvisoTope({llena}){
    return(
        <div className={llena ? "aviso_llena" : "aviso_abierta"}>
            {llena ? "Estamos llenos hoy" : "Aceptamos reservas"}

        </div>
    )
}

export default AvisoTope