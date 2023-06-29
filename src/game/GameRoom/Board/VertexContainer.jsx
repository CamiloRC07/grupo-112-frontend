import VertexButton from "./VertexButton/VertexButton";
import { useContext } from "react";
import { MiniGameContext } from "../MiniGame";

export default function VertexContainer({ vertexDistribution }) {
    let vertexColors = [];
    if (vertexDistribution != null && vertexDistribution != undefined) {
        vertexColors = vertexDistribution;
    }
    
    const miniGameContext = useContext(MiniGameContext);
    if (miniGameContext != undefined){
        vertexColors[miniGameContext.id] = miniGameContext.color;
    }
    return (
        <div className="buttons-container">
                    <div className="btns-row r0">
                        <VertexButton id={0} xPos={3} yPos={0} color={vertexColors[0]}/>
                        <VertexButton id={1} xPos={5} yPos={0} color={vertexColors[1]}/>
                        <VertexButton id={2} xPos={7} yPos={0} color={vertexColors[2]}/>
                    </div>
                    <div className="btns-row r1">
                        <VertexButton id={3} xPos={2} yPos={1} color={vertexColors[3]}/>
                        <VertexButton id={4} xPos={4} yPos={1} color={vertexColors[4]}/>
                        <VertexButton id={5} xPos={6} yPos={1} color={vertexColors[5]}/>
                        <VertexButton id={6} xPos={8} yPos={1} color={vertexColors[6]}/>
                    </div>
                    <div className="btns-row r2">
                        <VertexButton id={7} xPos={2} yPos={2} color={vertexColors[7]}/>
                        <VertexButton id={8} xPos={4} yPos={2} color={vertexColors[8]}/>
                        <VertexButton id={9} xPos={6} yPos={2} color={vertexColors[9]}/>
                        <VertexButton id={10} xPos={8} yPos={2} color={vertexColors[10]}/>
                    </div>
                    <div className="btns-row r3">
                        <VertexButton id={11} xPos={1} yPos={3} color={vertexColors[11]}/>
                        <VertexButton id={12} xPos={3} yPos={3} color={vertexColors[12]}/>
                        <VertexButton id={13} xPos={5} yPos={3} color={vertexColors[13]}/>
                        <VertexButton id={14} xPos={7} yPos={3} color={vertexColors[14]}/>
                        <VertexButton id={15} xPos={9} yPos={3} color={vertexColors[15]}/>
                    </div>
                    <div className="btns-row r4">
                        <VertexButton id={16} xPos={1} yPos={4} color={vertexColors[16]}/>
                        <VertexButton id={17} xPos={3} yPos={4} color={vertexColors[17]}/>
                        <VertexButton id={18} xPos={5} yPos={4} color={vertexColors[18]}/>
                        <VertexButton id={19} xPos={7} yPos={4} color={vertexColors[19]}/>
                        <VertexButton id={20} xPos={9} yPos={4} color={vertexColors[20]}/>
                    </div>
                    <div className="btns-row r5">
                        <VertexButton id={21} xPos={0} yPos={5} color={vertexColors[21]}/>
                        <VertexButton id={22} xPos={2} yPos={5} color={vertexColors[22]}/>
                        <VertexButton id={23} xPos={4} yPos={5} color={vertexColors[23]}/>
                        <VertexButton id={24} xPos={6} yPos={5} color={vertexColors[24]}/>
                        <VertexButton id={25} xPos={8} yPos={5} color={vertexColors[25]}/>
                        <VertexButton id={26} xPos={10} yPos={5} color={vertexColors[26]}/>
                    </div>
                    <div className="btns-row r6">
                        <VertexButton id={27} xPos={0} yPos={6} color={vertexColors[27]}/>
                        <VertexButton id={28} xPos={2} yPos={6} color={vertexColors[28]}/>
                        <VertexButton id={29} xPos={4} yPos={6} color={vertexColors[29]}/>
                        <VertexButton id={30} xPos={6} yPos={6} color={vertexColors[30]}/>
                        <VertexButton id={31} xPos={8} yPos={6} color={vertexColors[31]}/>
                        <VertexButton id={32} xPos={10} yPos={6} color={vertexColors[32]}/>
                    </div>
                    <div className="btns-row r7">
                        <VertexButton id={33} xPos={1} yPos={7} color={vertexColors[33]}/>
                        <VertexButton id={34} xPos={3} yPos={7} color={vertexColors[34]}/>
                        <VertexButton id={35} xPos={5} yPos={7} color={vertexColors[35]}/>
                        <VertexButton id={36} xPos={7} yPos={7} color={vertexColors[36]}/>
                        <VertexButton id={37} xPos={9} yPos={7} color={vertexColors[37]}/>
                    </div>
                    <div className="btns-row r8">
                        <VertexButton id={38} xPos={1} yPos={8} color={vertexColors[38]}/>
                        <VertexButton id={39} xPos={3} yPos={8} color={vertexColors[39]}/>
                        <VertexButton id={40} xPos={5} yPos={8} color={vertexColors[40]}/>
                        <VertexButton id={41} xPos={7} yPos={8} color={vertexColors[41]}/>
                        <VertexButton id={42} xPos={9} yPos={8} color={vertexColors[42]}/>
                    </div>
                    <div className="btns-row r9">
                        <VertexButton id={43} xPos={2} yPos={9} color={vertexColors[43]}/>
                        <VertexButton id={44} xPos={4} yPos={9} color={vertexColors[44]}/>
                        <VertexButton id={45} xPos={6} yPos={9} color={vertexColors[45]}/>
                        <VertexButton id={46} xPos={8} yPos={9} color={vertexColors[46]}/>
                    </div>
                    <div className="btns-row r10">
                        <VertexButton id={47} xPos={2} yPos={10} color={vertexColors[47]}/>
                        <VertexButton id={48} xPos={4} yPos={10} color={vertexColors[48]}/>
                        <VertexButton id={49} xPos={6} yPos={10} color={vertexColors[49]}/>
                        <VertexButton id={50} xPos={8} yPos={10} color={vertexColors[50]}/>
                    </div>
                    <div className="btns-row r11">
                        <VertexButton id={51} xPos={3} yPos={11} color={vertexColors[51]}/>
                        <VertexButton id={52} xPos={5} yPos={11} color={vertexColors[52]}/>
                        <VertexButton id={53} xPos={7} yPos={11} color={vertexColors[53]}/>
                    </div>
                </div> 
    );
}