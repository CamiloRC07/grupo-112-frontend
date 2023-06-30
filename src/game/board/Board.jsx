import "./Board.css";

import HexContainer from "./HexContainer";
import VertexContainer from "./VertexContainer";
import EdgeContainer from "./EdgeContainer";

export default function Board({ vertexColors, HexDistribution, EdgeDistribution  }){
    return (
        <div className="board-container">
            <div className="board">
                <div className="map-box">
                    <VertexContainer vertexDistribution={vertexColors}/>           
                    <HexContainer HexDistribution={HexDistribution}/>
                    <EdgeContainer edgeDistribution={EdgeDistribution}/>
                </div>
            </div>
        </div>
    )
}