import "./EdgeButton.css";
import { useState, useContext, useEffect } from "react";
export default function EdgeButton({ id, xPos, yPos, color, type }){
    const getColor = () => {
        if (color == null || color == undefined){
            return "transparent";
        }
        return color;
    }

    const [vertex, setVertex] = useState({
        background: getColor()
    });
    const handleClick = () => {
        console.log(`Edge ${id} clicked: (${xPos}, ${yPos})`);
        setVertex({
            background: "blue"
        });
    }
    return (
        <button 
            className={`edge-button p${type}` }
            id={`Edge-Btn-${id}`}
            style={vertex}
            onClick={handleClick}>
                <img src="../../../public/assets/carretera.png" alt="" />
        </button>
    )
}