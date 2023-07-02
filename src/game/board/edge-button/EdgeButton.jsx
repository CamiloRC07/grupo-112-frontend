import { GameContext } from "../../Game";
import "./EdgeButton.css";
import { useState, useContext, useEffect } from "react";

const colors = ['red', 'blue', 'green', 'yellow'];

export default function EdgeButton({ id, xPos, yPos, color, type }){

    const {
        setEdgeClicked,
        handleEdgeClick } = useContext(GameContext);

    const getColor = () => {
        if (color == null || color == undefined){
            return "transparent";
        }
        return color;
    }

    const [edgeStyle, setEdgeStyle] = useState({
        background: getColor()
    });
    const handleClick = () => {
        console.log(`Edge ${id} clicked: (${xPos}, ${yPos})`);
        setEdgeClicked({
            id: id,
            xPos: xPos,
            yPos: yPos,
        })
        setEdgeStyle({
            background: "blue"
        });
        handleEdgeClick({id: id});
    }
    return (
        <button 
            className={`edge-button p${type}` }
            id={`Edge-Btn-${id}`}
            style={edgeStyle}
            onClick={handleClick}>
                <img src="../../../public/assets/carretera.png" alt="" />
        </button>
    )
}