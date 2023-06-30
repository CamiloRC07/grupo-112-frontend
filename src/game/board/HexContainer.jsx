import Hexagon from "./hexagon/Hexagon"
import ArcillaImg from "../../../public/assets/ArcillaTile.jpg";
import SheepsImg from "../../../public/assets/SheepsTile.jpg";
import ForestImg from "../../../public/assets/ForestTile.jpg";
import TrigoImg from "../../../public/assets/TrigoTile.jpg";
import DesertImg from "../../../public/assets/DesertTile.jpg";
import MountainImg from "../../../public/assets/mountainTile.jpg";

export default function HexContainer({ HexDistribution }){
    const getRandomImgSrc = () => {
        let imgs = [ArcillaImg, SheepsImg, ForestImg, TrigoImg, MountainImg, DesertImg];
        return imgs[Math.floor(Math.random() * 6)];
    }
    const getImgSrc = (id) => {
        switch (HexDistribution[id]) {
            case "Arcilla":
                return ArcillaImg;
            case "Sheeps":
                return SheepsImg;
            case "Forest":
                return ForestImg;
            case "Trigo":
                return TrigoImg;
            case "Desert":
                return DesertImg;
            case "Mountain":
                return MountainImg;
            default:
                return getRandomImgSrc();
        }
    }
    return (
        <div className="hex-container">
            <div className="hex-row r0">
                <Hexagon imgSrc={getImgSrc(0)} id={0}/>
                <Hexagon imgSrc={getImgSrc(1)} id={1}/>
                <Hexagon imgSrc={getImgSrc(2)} id={2}/>
            </div>
            <div className="hex-row r1">
                <Hexagon imgSrc={getImgSrc(3)} id={3}/>
                <Hexagon imgSrc={getImgSrc(4)} id={4}/>
                <Hexagon imgSrc={getImgSrc(5)} id={5}/>
                <Hexagon imgSrc={getImgSrc(6)} id={6}/>
            </div>
            <div className="hex-row r2">
                <Hexagon imgSrc={getImgSrc(7)} id={7}/>
                <Hexagon imgSrc={getImgSrc(8)} id={8}/>
                <Hexagon imgSrc={getImgSrc(9)} id={9}/>
                <Hexagon imgSrc={getImgSrc(10)} id={10}/>
                <Hexagon imgSrc={getImgSrc(11)} id={11}/>
            </div>
            <div className="hex-row r3">
                <Hexagon imgSrc={getImgSrc(12)} id={12}/>
                <Hexagon imgSrc={getImgSrc(13)} id={13}/>
                <Hexagon imgSrc={getImgSrc(14)} id={14}/>
                <Hexagon imgSrc={getImgSrc(15)} id={15}/>
            </div>
            <div className="hex-row r4">
                <Hexagon imgSrc={getImgSrc(16)} id={16}/>
                <Hexagon imgSrc={getImgSrc(17)} id={17}/>
                <Hexagon imgSrc={getImgSrc(18)} id={18}/>
            </div>
            
        </div>
    )
};