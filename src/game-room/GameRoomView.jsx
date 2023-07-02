import { useContext, useState } from "react"
import { GameRoomContext } from "./GameRoomsList"
import API_URL from "../common/config";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext";

function GameRoomView() {

    const { token } = useContext(AuthContext);
    const { id, gameRoomData, setId, getGameRoomList } = useContext(GameRoomContext);
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

    const isUserOwner = () => {

        const config = {
            method: 'get',
            url: `${API_URL}/users/find/me`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        axios(config)
            .then(response => {
                setUser(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        
        return 
    }

    return (
        <div>
            <h1>Game Room: {id}.</h1>
            <button onClick={startGame}>Iniciar</button>
            <button onClick={deleteGameRoom}>Borrar</button>
            <button onClick={leaveGameRoom}>Abandonar</button>
        </div>
    )
}

export default GameRoomView