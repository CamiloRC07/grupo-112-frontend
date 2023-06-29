import Board from "./Board/Board";
import { createContext, useState, useEffect } from "react";
import "./MiniGame.css"
import findVertexByIndex from "./findVertexByIndex";
import getRandomHexDistribution from "./getRandomHexDistribution";

export const MiniGameContext = createContext();
export default function MiniGame(){
    const [hexState, setHexState] = useState([]);
    if (hexState.length == 0){
        setHexState(getRandomHexDistribution());
    }
    const [miniGameWin, setMiniGameWin] = useState(false);
    const [selectedVertexToGuess, setSelectedVertexToGuess] = useState(Math.floor(Math.random() * 53));
    const HexDistribution = hexState;
    const [vertexClicked, setVertexClicked] = useState(null);
    const {x, y} = findVertexByIndex(selectedVertexToGuess);
    const [vertexColorSetter, setVertexColorSetter] = useState(null);
    const idsWithOnlyTwoNeighbours = [
        27, 38, 47, 51, 52, 53, 50, 42, 32, 26, 15, 6, 2,
        1, 0, 3, 11, 21
    ]
    let toClickArr = [];
    if (y % 2 == 0){
        toClickArr = [
            {xPos: x - 1, yPos: y + 1},
            {xPos: x + 1, yPos: y + 1},
            {xPos: x, yPos: y - 1}
        ];
    } else {
        toClickArr =[
            {xPos: x - 1, yPos: y - 1},
            {xPos: x + 1, yPos: y - 1},
            {xPos: x, yPos: y + 1}
        ];
    }
    const [vertexToClick, setVertexToClick] = useState(toClickArr);
    const [vertexCorrectClicked, setVertexCorrectClicked] = useState([]);
    useEffect(() => {
        
        if (vertexClicked == null){
            return;
        };
        let accerted = false;
        let idOfAccerted = null;
        let i = 0;
        
        vertexToClick.forEach((vertex) => {
            if (vertex.xPos == vertexClicked.xPos && vertex.yPos == vertexClicked.yPos){
                console.log("Correcto")
                accerted = true;
                idOfAccerted = i;
                i ++;
                setVertexColorSetter({ 
                    id: vertexClicked.id , 
                    vertexParams: { background: "blue" }
                });
                let alreadyClicked = false;
                vertexCorrectClicked.forEach((clikedYet) => {
                    if (clikedYet.xPos == vertexClicked.xPos && clikedYet.yPos == vertexClicked.yPos){
                        alreadyClicked = true;
                    }
                });
                if (alreadyClicked){
                    return;
                }
                let newCorrectlyCliked = vertexCorrectClicked.concat(vertex);
                if (idsWithOnlyTwoNeighbours.includes(selectedVertexToGuess)){
                    if (newCorrectlyCliked.length == 2){
                        setMiniGameWin(true);
                    }
                } else {
                    if (newCorrectlyCliked.length == 3 ){
                        setMiniGameWin(true);
                    }
                }
                setVertexCorrectClicked(newCorrectlyCliked);
            }
        });
        if (!accerted){
            console.log("Incorrecto");
        } 
    }, [vertexClicked]);
    return (
        <>
        <MiniGameContext.Provider value={{
            id: selectedVertexToGuess,
            color: "green",
            vertexColorSetter: vertexColorSetter,
            saveVertex: setVertexClicked
        }}>
            <h1 className="title-font">Mini-Juego</h1>
            <div className="board-and-instructions">
                <Board HexDistribution={HexDistribution}/>
                <div className="instructions">
                    <h2 className="pretty-font">Reglas</h2>
                    <p className="instruction-text">
                        Haz click sobre los vértices en los que <b>NO</b> se puede construir un asentamiento
                        si hubiera un asentamiento en el vértice de color verde.
                        
                    </p>
                    {miniGameWin && <button className="btn-win-minigame" onClick={
                        () => {window.location.reload()}
                    }>¡Ganaste! <br /> Volver a jugar</button>}
                </div>
            </div>
        </MiniGameContext.Provider>
        </>
    );
}