import { useContext, useState } from "react"
import { GameRoomContext } from "./GameRoomsList"
import API_URL from "../common/config";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext";
import LetsPlayButton from "../common/lets-play-button/LetsPlayButton";

function GameRoomView() {

    const { token } = useContext(AuthContext);
    const { id, gameRoomData, setId, getGameRoomList, getGameRoom } = useContext(GameRoomContext);
    const [data, setData] = useState({});

    const startGame = () => {
        const config = {
            method: 'post',
            url: `${API_URL}/gameRooms/${id}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        axios(config)
            .then(response => {
                setData(response.data);
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deleteGameRoom = () => {
        const config = {
            method: 'delete',
            url: `${API_URL}/gameRooms/${id}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        axios(config)
            .then(response => {
                setData(response.data);
                console.log('Borrada con éxito')
                console.log(response.data);
                getGameRoomList();
                setId(null);
            })
            .catch(error => {
                console.log('No se pudo borrar')
                console.log(error);
            })
    }

    const leaveGameRoom = () => {
        const config = {
            method: 'post',
            url: `${API_URL}/gameRooms/${id}/leave`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        axios(config)
            .then(response => {
                setData(response.data);
                getGameRoomList();
                setId(null);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h1>{id}th Game Room</h1>
            <button onClick={getGameRoom}>Refrescar</button>
            <button onClick={startGame}>Iniciar</button>
            <button onClick={deleteGameRoom}>Borrar</button>
            <button onClick={leaveGameRoom}>Abandonar</button>
            <div>
                <p>Usuarios en la sala:</p>
                {gameRoomData !== null &&
                    <div>{Object.values(gameRoomData.users).map(user => (
                        <p key={user.id}>id: {user.id}, nombre: {user.name}</p>
                    ))}</div>
                }
                
                
                {gameRoomData !== null && <div>{!gameRoomData.gameroom.started && <p>El juego aun no inicia</p>}</div>}
                {gameRoomData !== null && <div>{gameRoomData.gameroom.started && <LetsPlayButton message={'El juego ha comenzado! Toca el botón para unirte'}/>}</div>}
                
                
                
            </div>
        </div>
    )
}

export default GameRoomView