import EdgeButton from "./edge-button/EdgeButton";

export default function EdgeContainer({ edgeDistribution }) {
    let vertexColors = [];
    if (edgeDistribution != null && edgeDistribution != undefined) {
        vertexColors = edgeDistribution;
    }

    return (
        <div className="edge-buttons-container">
            <div className="edge-btns-hex h0">
                <EdgeButton id={0} xPos={3} yPos={0} color={vertexColors[0]} type={"0"}/>
                <EdgeButton id={1} xPos={5} yPos={0} color={vertexColors[1]} type={"1"}/>
                <EdgeButton id={2} xPos={7} yPos={0} color={vertexColors[2]} type={"2"}/>
                <EdgeButton id={3} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={4} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={5} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h1">
                <EdgeButton id={6} xPos={5} yPos={0} color={vertexColors[1]} type={"1"}/>
                <EdgeButton id={7} xPos={7} yPos={0} color={vertexColors[2]} type={"2"}/>
                <EdgeButton id={8} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={9} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={10} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h2">
                <EdgeButton id={11} xPos={5} yPos={0} color={vertexColors[1]} type={"1"}/>
                <EdgeButton id={12} xPos={7} yPos={0} color={vertexColors[2]} type={"2"}/>
                <EdgeButton id={13} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={14} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={15} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h3">
                <EdgeButton id={16} xPos={3} yPos={0} color={vertexColors[0]} type={"0"}/>
                <EdgeButton id={17} xPos={5} yPos={0} color={vertexColors[1]} type={"1"}/>
                <EdgeButton id={18} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={19} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={20} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h4">
                <EdgeButton id={21} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={22} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={23} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h5">
                <EdgeButton id={24} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={25} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={26} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h6">
                <EdgeButton id={27} xPos={7} yPos={0} color={vertexColors[2]} type={"2"}/>
                <EdgeButton id={28} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={29} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={30} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h7">
                <EdgeButton id={31} xPos={3} yPos={0} color={vertexColors[0]} type={"0"}/>
                <EdgeButton id={32} xPos={5} yPos={0} color={vertexColors[1]} type={"1"}/>
                <EdgeButton id={33} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={34} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={35} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h8">
                <EdgeButton id={36} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={37} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={38} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h9">
                <EdgeButton id={39} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={40} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={41} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h10">
                <EdgeButton id={42} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={43} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={44} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h11">
                <EdgeButton id={45} xPos={7} yPos={0} color={vertexColors[2]} type={"2"}/>
                <EdgeButton id={46} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={47} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={48} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h12">
                <EdgeButton id={49} xPos={7} yPos={0} color={vertexColors[2]} type={"0"}/>
                <EdgeButton id={50} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={51} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={52} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h13">
                <EdgeButton id={53} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={54} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={55} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h14">
                <EdgeButton id={56} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={57} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={58} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h15">
                <EdgeButton id={59} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={60} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={61} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h16">
                <EdgeButton id={62} xPos={7} yPos={0} color={vertexColors[2]} type={"0"}/>
                <EdgeButton id={63} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={64} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={65} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h17">
                <EdgeButton id={66} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={67} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={68} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
            <div className="edge-btns-hex h18">
                <EdgeButton id={69} xPos={3} yPos={0} color={vertexColors[3]} type={"3"}/>
                <EdgeButton id={70} xPos={5} yPos={0} color={vertexColors[4]} type={"4"}/>
                <EdgeButton id={71} xPos={7} yPos={0} color={vertexColors[5]} type={"5"}/>
            </div>
        </div> 
    );
}