import "./Board.css";

import HexContainer from "./HexContainer";
import VertexContainer from "./VertexContainer";
import EdgeContainer from "./EdgeContainer";
import { useContext } from "react";
import { GameContext } from "../Game";

export default function Board({ vertexColors, HexDistribution, EdgeDistribution }){

    const { turn, playerInTurn } = useContext(GameContext);

    return (
        <div className="board-container">
            <div className="board">
                {(turn !== null) && <div>Ronda {Math.trunc(turn / 4) + 1}</div>}
                {playerInTurn !== null && <div>: Turno de {playerInTurn.username}</div>}
                <div className="map-box">
                    <VertexContainer vertexDistribution={vertexColors}/>           
                    <HexContainer HexDistribution={HexDistribution}/>
                    <EdgeContainer edgeDistribution={EdgeDistribution}/>
                </div>
            </div>
        </div>
    )
}