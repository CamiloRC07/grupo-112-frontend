import { createContext, useContext, useEffect, useState } from "react"
import "./GameRoom.css"
import axios from "axios";
import API_URL from '../common/config' ;
import { AuthContext } from "../auth/AuthContext";
import RoomData from "./RoomData";
import GameRoomView from "./GameRoomView";
import AlertMessage from "../common/alert-message/AlertMessage";

export const GameRoomContext = createContext();

function GameRoomsList() {

    // status: Booleano sobre sesión iniciada o no, token: para hacer solicitudes a la API
    const { status, token, alertMessage, setAlertMessage } = useContext(AuthContext);
    const [gameRooms, setGameRooms] = useState([]);
    const [gameRoomData, setGameRoomData] = useState(null);
    const [id, setId] = useState(null);

    const getGameRoomList = () => {
        const config = {
            method: 'get',
            url: `${API_URL}/gameRooms`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        axios(config)
            .then(response => {
                const gameRoomsList = response.data
                const notStartedGameRooms = gameRoomsList.filter( gameroom => {return !gameroom.Started})
                setGameRooms(notStartedGameRooms)
                // gameRoomsList.map (gameRoom => {console.log(onlyStartedGML)})
                console.log(gameRoomsList)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const createGameRoom = () => {
        const config = {
            method: 'post',
            url: `${API_URL}/gameRooms`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        axios(config)
            .then(response => {
                const gameRoom = response.data;
                setId(gameRoom.GameRoom.id);
                getGameRoom();
                // moverse a la vista unica de GameRoom id=GameRoomContextId
            })
            .catch(error => {
                console.log(error);
                setAlertMessage('No puedes crear salas sin sesión')
            })
    }

    const joinGameRoom = (idGameRoomToJoin) => {
        const config = {
            method: 'patch',
            url: `${API_URL}/gameRooms/${idGameRoomToJoin}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        axios(config)
            .then(response => {
                console.log(response.data);
                setId(idGameRoomToJoin);
                getGameRoom();
                // moverse a la vista unica de GameRoom id=GameRoomContextId
            })
            .catch(error => {
                console.log(error);
                setAlertMessage('Error al unirse');
            })
    }

    const getGameRoom = () => {
        const config = {
            method: 'get',
            url: `${API_URL}/gameRooms/find/one`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        axios(config)
            .then(response => {
                setGameRoomData(response.data);
                console.log(response.data);
                setId(response.data.gameroom.id)
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        getGameRoom();

        getGameRoomList()
    }, []);

    return (
        <GameRoomContext.Provider value={{ id, gameRoomData, setId, getGameRoomList, joinGameRoom, getGameRoom}}>
            <AlertMessage message={alertMessage}></AlertMessage>
            {(id === null) && 
                <div className="gameroom-content">
                    <h1 className="pretty-font title-colors">Crear o unirse a una sala de juego</h1>
                    
                    <div className="game-room-box">
                        <div className="game-room-actions">
                            <button onClick={getGameRoomList}>Refrescar</button>
                            <button onClick={createGameRoom}>Crear</button>
                        </div>
                        <div className="rooms-list">
                            {gameRooms.length === 0 && <p>Ups! No hay salas creadas</p>}
                            {Object.values(gameRooms).map(room => (
                                <RoomData key={room.Id}
                                id={room.Id}
                                owner={room.Owner.OwnerName}
                                countUsersInside={room.UsersInside}
                            />
                            ))}
                        </div>
                    </div>
                </div>
            }
            {(id !== null) && <GameRoomView></GameRoomView> }
        </GameRoomContext.Provider>
    )
}

function crearLista(gameRooms) {
    return gameRooms.map((g) => g.Owner.OwnerName)
}

export default GameRoomsList