import "./Hexagon.css";
export default function Hexagon({ imgSrc }){
    return (
        <div className="hexagon">
            <div className="hexagon-d0" id="hex1">
                <div className="hexagon-d1" id="hex2">
                    <div className="hexagon-d2" id="hex3">
                        <img src={imgSrc} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
