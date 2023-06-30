import { useContext, useEffect, useState } from "react"
import "./GameRoom.css"
import axios from "axios";
import API_URL from '../common/config' ;
export const GameRoomContext = useContext();

function GameRoom() {

    // variables de sala y blabla
    const [gameRooms, setGameRooms] = useState([])
    let values = [];

    useEffect(() => {
        async function getGameRoomList() {
            try {
                // console.log(BACKEND_URL);
                const response = await axios.get(`${API_URL}/gameRooms`);
                // console.log(response.data);
                setGameRooms(response.data);

                values = crearLista(gameRooms);
                console.log(crearLista(response.data));
                
            } catch (error) {
                console.log(error);
            }
        }
        getGameRoomList();
        
        

    }, []);

    return (
        <div className="description">
            <h1 className="pretty-font title-colors">Crear o unirse a una sala de juego</h1>
            <div className="game-room-box">
                <div className="game-room-actions">
                    Refrescar, Crear sala
                    <p>{values}</p>
                </div>
                <div className="rooms-list">

                </div>
                <p>
                    <span className="pretty-font">Conquer of Cathay</span> es un juego de manejo de recursos
                </p>
            </div>
        </div>
    )
}

function crearLista(gameRooms) {
    return gameRooms.map((g) => g.Owner.OwnerName)
}

export default GameRoom