import "./AboutUs.css"
import EduardoImage from "../../public/assets/creator-1.jpg"
import CamiloImage from "../../public/assets/creator-2.jpg"

function AboutUs() {
    return (
        <div className="about-us">
            <h1 className="title-font">Sobre Nosotros</h1>

            <div className="members">

                <div className="member">
                    <img src={EduardoImage} alt="Imagen" id="first"/>
                    <h2 className="pretty-font names-color">Eduardo Contreras</h2>
                    <p>Estudiante de 5to año de Ingeniería en Software y Física en la Pontificia Universidad Católica.</p>
                </div>

                <div className="member">
                    <img src={CamiloImage} alt="Image" />
                    <h2 className="pretty-font names-color">Camilo Romero</h2>
                    <p>Estudiante de 4to año de Ingeniería en Software en la Pontificia Universidad Católica.</p>
                </div>

            </div>
        </div>
    )
}

export default AboutUs