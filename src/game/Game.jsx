import Board from "./board/Board";
import "./Game.css";
import axios from "axios";
import API_URL from '../common/config' ;
import { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

function Game() {

    // variables del contexto de Game Room
    const userId = 1;
    const gameId = 1;
    // fin

    const [gameStatus, setGameStatus] = useState([]);
    const [vertexClicked, setVertexClicked] = useState(null);
    const [edgeClicked, setEdgeClicked] = useState(null);

    async function getGameStatus(UserId, GameId) {
        try {
            console.log(API_URL);
            console.log(`${API_URL}/game/${GameId}`);
            const response = await axios.get(`${API_URL}/game/${GameId}`);
            console.log(response.data);
            setGameStatus(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getThrowDie(UserId, GameId) {
        try {
            console.log(`${API_URL}/game/${GameId}/throwDie`);
            const response = await axios.get(`${API_URL}/game/${GameId}/throwDie`);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = () => {
        getGameStatus(userId, gameId)
    }

    useEffect( () => {
        if (vertexClicked !== null) {
            console.log(`Vertex ${vertexClicked.id} clicked: (${vertexClicked.xPos}, ${vertexClicked.yPos})`);
            axios.patch(`${API_URL}/game/${gameId}/build`, {
                type: 0,
                position: vertexClicked.id
            })
             .then((response) => {
                console.log(response.data); // to do
             })
             .catch((error) => {
                console.log(error);
             })
            setVertexClicked(null);
        }
    }, [vertexClicked])

    return (
        <GameContext.Provider value={{
            saveVertex: setVertexClicked
        }}>
            <h1 className="title-font">Game</h1>
            <div className="board-and-instructions">
                <Board HexDistribution={[]}/>
                <div className="instructions-and-stats">
                    <h2 className="pretty-font">Estadísticas</h2>
                    <p className="instruction-text">Aquí aparecerán distintas estadísticas del juego y del jugador.</p>
                    <button onClick={handleClick}>
                        Actualizar juego
                    </button>
                    <p>Mueve el mouse sobre el tablero para colocar un asentamiento.</p>
                    <p>Espera tu turno, refresca el estado del juego con el botón.</p>
                    <p>Cerca de los asentamientos puedes colocar carreteras.</p>
                    <p>Para mover una unidad, primero toca en el tablero la unidad que quieres mover y luego la posición. Los ataques ocurren automáticamente.</p>
                </div>
            </div>
            
        </GameContext.Provider>
    )
}

export default Game