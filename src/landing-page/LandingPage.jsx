import './LandingPage.css'
import API_URL from '../common/config' ;
import { useEffect, useState } from "react";
import LetsPlayButton from '../common/lets-play-button/LetsPlayButton'
import CastilloImage from '../../public/assets/castillo.png'
import axios from 'axios';

function LandingPage() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function getUser() {
            try {
                console.log(API_URL);
                const response = await axios.get(`${API_URL}/users/Harrison Jones`);
                console.log(response);
                setUser(response.data);
                
            } catch (error) {
                console.log(error);
            }
        }
        getUser();
    }, []);
    
    return(
        <div className="landing-page">
            <div className="texto">
                <h1 className="title-font">Construye y conquista con <span className="pretty-font title-colors">Conquer of Cathay</span></h1>

                <LetsPlayButton/>
                <h5>Hola, {user.name}!</h5>
            </div>

            <div className="landing-image-div">
                <img src={CastilloImage} alt="Imagen promocional del juego" />
            </div>
        </div>
    )
}

export default LandingPage