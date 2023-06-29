import "./Description.css"
import LetsPlayButton from '../common/lets-play-button/LetsPlayButton'
import PartiesCount from "./parties-count/PartiesCount"

function Description() {
    return (
        <div className="description">
            <h1 className="pretty-font title-colors">Conquer of Cathay</h1>
            <div className="description-text">
                <p>
                    <span className="pretty-font">Conquer of Cathay</span> es un juego de manejo de recursos dónde puedes sabotear a tus rivales.
                    Tú decides si enfocarte en el ataque o la defensa.
                    El juego de desarrolla sobre el continente Cathay y podrás ocupar sus tierras para obtener recursos.
                </p>
                <p>
                    El objetivo de <span className="pretty-font ">Conquer of Cathay</span> es alcanzar 10 puntos de victoria antes que tus rivales.
                    Si quieres aumentar tu puntuación tendrás que acumular recursos para construir asentamientos y caminos.
                    Si quieres que tus rivales no aumenten su puntuación deberás sabotearlos, contrata soldados para atacar sus bases.
                </p>
            </div>

            <LetsPlayButton/>

            <PartiesCount/>

        </div>
    )
}

export default Description