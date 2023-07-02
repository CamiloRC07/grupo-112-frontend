import './LandingPage.css'
import LetsPlayButton from '../common/lets-play-button/LetsPlayButton'
import CastilloImage from '../../public/assets/castillo.png'

function LandingPage() {
    
    return(
        <div className="landing-page">
            <div className="texto">
                <h1 className="title-font">Construye y conquista con <span className="pretty-font title-colors">Conquer of Cathay</span></h1>
                <LetsPlayButton message={'Comienza tu aventura para convertirte en maestro conquistador de Cathay.'}/>
            </div>

            <div className="landing-image-div">
                <img src={CastilloImage} alt="Imagen promocional del juego" />
            </div>
        </div>
    )
}

export default LandingPage