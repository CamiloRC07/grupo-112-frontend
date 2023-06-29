export default function getRandomHexDistribution(){
    let hexDistribution = [];
    let hexTypes = ["Arcilla", "Sheeps", "Forest", "Trigo", "Desert", "Mountain"];
    for (let i = 0; i < 19; i++){
        let hex = hexTypes[Math.floor(Math.random() * 6)];
        hexDistribution.push(hex);
    }
    return hexDistribution;
}