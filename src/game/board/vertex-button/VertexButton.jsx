import "./VertexButton.css";
import { useState, useContext, useEffect } from "react";
import { MiniGameContext } from '../../minigame/MiniGame';
import { GameContext } from '../../Game';

export default function VertexButton({ id, xPos, yPos, color }){
    const miniGameContext = useContext(MiniGameContext);
    const gameContext = useContext(GameContext);

    const getColor = () => {
        if (color == null || color == undefined){
            return "translucent";
        }
        return color;
    }
    
    const [vertex, setVertex] = useState({
        background: getColor()
    });
    if (miniGameContext != null){
        useEffect(() => {
            if (miniGameContext.vertexColorSetter != null && miniGameContext.vertexColorSetter.id == id){
                setVertex(miniGameContext.vertexColorSetter.vertexParams);
            }
        }, [miniGameContext.vertexColorSetter]);
    }

    const handleClick = () => {
        console.log(`Vertex ${id} clicked: (${xPos}, ${yPos})`);
        if (miniGameContext != null){
            miniGameContext.saveVertex({id: id, xPos: xPos, yPos: yPos});
        } 
        if (gameContext !== null){
            gameContext.saveVertex({id: id, xPos: xPos, yPos: yPos});
            setVertex({
                background: 'red'
            })
            gameContext.handleVertexClick({id: id, xPos: xPos, yPos: yPos});
        } else {
            setVertex({
                background: "red"
            });
        }
    }
    return (
        <button 
            className="vertex-button" 
            id={`Vertex-Btn-${id}`}
            style={vertex}
            onClick={handleClick}>
            <img src="../../../public/assets/pueblo.png" alt="" />
        </button>
    )
}