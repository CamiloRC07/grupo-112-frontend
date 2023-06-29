import Board from "./Board/Board"
import "./GameRoom.css"

export default function GameRoom() {
    return (
        <>
            <h1 className="title-font">Game Room</h1>
            <div className="board-and-instructions">
                <Board HexDistribution={[]}/>
                <div className="instructions-and-stats">
                    <h2 className="pretty-font">Estadísticas</h2>
                    <p className="instruction-text">Aquí aparecerán distintas estadísticas del juego y del jugador.</p>
                </div>
            </div>
            <p>Este espacio es para estadísticas menos relevantes</p>
        </>
    )
}