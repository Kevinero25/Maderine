import "./Hero.css"

function Hero() {
    return (
        <div className="container_Hero">

            <div className="container_img">
                <img className="img_Hero" src="/Imagenes/Matcha.webp" alt="Matcha" />
            </div>

            <div className="container_titulo">
                <h1 className="title_hero">Matcha Latte</h1>
                <p className="frase_hero">Matcha, leche y un toque dulce. Así de simple</p>
                <button className="button_hero">
                    Pidelo aqui
                </button>
            </div>


        </div>
    )
}

export default Hero