import "./Board.css";

import HexContainer from "./HexContainer";
import VertexContainer from "./VertexContainer";

export default function Board({ vertexColors, HexDistribution }){
    return (
        <div className="board-container">
            <div className="board">
                <div className="map-box">
                    <VertexContainer vertexDistribution={vertexColors}/>           
                    <HexContainer HexDistribution={HexDistribution}/>
                </div>
            </div>
        </div>
    )
}