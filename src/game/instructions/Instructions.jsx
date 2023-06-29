import "./Instructions.css";
import { useState } from "react";
import leftArrow from "../../../public/assets/left-arrow.png";
import rightArrow from  "../../../public/assets/right-arrow.png";
import mapImg from  "../../../public/assets/mapImg.png";
import fTurnImg from  "../../../public/assets/firstTurn.png";
import sTurnImg from  "../../../public/assets/otherTurns.png";
import constructionImg from  "../../../public/assets/construction.png";
import comerceImg from  "../../../public/assets/comerce.png";

import { useNavigate } from "react-router-dom";


export default function Instructions() {
    const [i, setI] = useState(0);
    let redirect = useNavigate();

    const posicionamiento = {
        "left-back": {
            transform: `translateX(-8rem) scale(0.8)`,
            filter: "blur(0.3rem)",
            transition: "transform 0.5s ease-out",
            zIndex: -1
        },
        "right-back": {
            transform: `translateX(8rem) scale(0.8)`,
            filter: "blur(0.3rem)",
            transition: "transform 0.5s ease-out",
            zIndex: -1
        },
        "right-far-back": {
            transform: `translateX(15rem) scale(0.4)`,
            filter: "blur(0.3rem)",
            transition: "transform 0.5s ease-out",
            zIndex: -2
        },
        "left-far-back": {
            transform: `translateX(-15rem) scale(0.4)`,
            filter: "blur(0.3rem)",
            transition: "transform 0.5s ease-out",
            zIndex: -2
        },
        "front": {
            transition: "transform 0.5s ease-out",
        },
        "hidden": {
            visibility: "hidden"
        }
    };
    const getPosicionamiento = (i, pos) => {
        let res = pos - i;
        switch (res) {
            case 0:
                return posicionamiento.front;
            case 1:
                return posicionamiento["right-back"];
            case 2:
                return posicionamiento["right-far-back"];
            case -1:
                return posicionamiento["left-back"];
            case -2:
                return posicionamiento["left-far-back"];
            default:
                return posicionamiento.hidden;
        };
    };
    const leftBtn = () => {
        if (i > 0) {
            setI(i - 1);
        }
    };
    const rightBtn = () => {
        if (i < 4) {
            setI(i + 1);
        }
    };
    return (
        <div className="page-wrapper">
            <h1 className="main-title title-font">¿ Cómo jugar a <span className="pretty-font title-colors">Conquer of Cathay</span> ?</h1>
            <div className="instructions-content">
                <p>
                    El objetivo principal del juego es conseguir 10 puntos de victoria.
                    Estos puntos se consiguen construyendo y conquistando asentamientos o ciudades.
                </p>
                <p>
                    Para comprender el juego, es necesario entender los siguientes conceptos:
                </p>
            </div>
            <div className="buttons-wrapper">
                <button className="btn left-btn" onClick={leftBtn} style={
                    i === 0 ? {visibility: "hidden"} : {}
                }>
                    <img src={leftArrow} alt="" />
                </button>   
                <button className="btn right-btn" onClick={rightBtn} style={
                    i === 4 ? {visibility: "hidden"} : {}
                }>
                    <img src={rightArrow} alt="" />
                </button>
            </div>
            <div className="instructions-key-concepts-wrapper">            
                <div className="instructions-key-concepts"style={
                        getPosicionamiento(i, 0)
                    }>
                    <div className="title-wrapper vertical">
                        <img src={mapImg} alt="" />
                        <h2 className="pretty-font instruction-subtitle" >Mapa</h2>
                    </div>
                    <div className="ol-li-content">
                        <p>
                            El mapa o tablero está compuesto por hexágonos/casillas.
                            Cada hexágono genera un tipo de recurso y sobre cada 
                            hexágono se coloca un número, excepto sobre la casilla de Desierto.
                        </p>
                        <p>
                            Cada turno se tiran dos dados y se suman sus valores. Si este número
                            coincide con el número de una casilla, todos los jugadores que tengan
                            un asentamiento o ciudad en los alrededores de esa casilla, obtendrán
                            el recurso que representa esa casilla.
                            Existen 6 tipos de hexágonos:
                        </p>
                        <ul>
                            <li>Montaña: Genera el recurso <b>Piedra</b>.</li>
                            <li>Pastizales: Genera el recurso <b>Oveja</b>.</li>
                            <li>Cantera de arcilla: Genera el recurso <b>Arcilla</b>.</li>
                            <li>Bosque: Genera el recurso <b>Madera</b>.</li>
                            <li>Granja de trigo: Genera el recurso <b>Trigo</b>.</li>
                            <li>Desierto: <b>No</b> genera recursos.</li>
                        </ul>
                    </div>
                </div>
                <div className="instructions-key-concepts" style={
                    getPosicionamiento(i, 1)
                }>
                    <div className="title-wrapper vertical">
                        <img src={fTurnImg} alt="" />
                        <h2 className="pretty-font instruction-subtitle">Primeros Turnos</h2>
                    </div>
                    <div className="ol-li-content">
                        <p>
                            En los primeros 2 turnos de cada jugador, el juego es diferente. En estos 
                            turnos los jugadores deben construir 2 asentamientos y 2 carreteras sin ocupar recursos. 
                        </p>
                        <p>
                            Cuando sea tu primer turno,
                            debes colocar un asentamiento y una carretera adyacente a este en el tablero siguiendo 
                            las <b>Reglas de construcción</b>.
                        </p>
                        <p>
                            En tu segundo turno, debes hacer lo mismo, pero esta vez recibiras un recurso por cada hexágono
                            que este adyacente al asentamiento recién construido.
                        </p>
                    </div>
                </div>
                <div className="instructions-key-concepts" style={
                    getPosicionamiento(i, 2)
                }>
                    <div className="title-wrapper vertical">
                        <img src={sTurnImg} alt="" />
                        <h2 className="pretty-font instruction-subtitle">Rondas Posteriores</h2>
                    </div>
                    <div className="ol-li-content">
                        <p>
                            En las rondas posteriores, al finalizar cada turno se tiran dos dados y 
                            se suman sus valores. Siguiendo el comportamiento descrito en <b>Mapa</b>, podrías obtener el recurso de alguna casilla. Si tienes una ciudad,
                            obtendrás dos recursos.
                        </p>
                        <p>
                            La <b>Reserva</b> (mirar <b>Comercio</b>) es quién se encarga de repartir los recursos, por
                            lo que si se da el caso que la <b>Reserva</b> no tenga la cantidad de recursos suficientes para repartir a todos 
                            los jugadores que debían recibir un recurso, ningún jugador recibirá el recurso.
                        </p>
                        <p>
                            Durante tu turno, puedes construir y reclutar las veces que quieras mientras
                            tengas los recursos necesarios (mirar <b>Reglas de Construccion y Reclutamiento</b>). Tambien puedes comerciar cuantas 
                            veces quieras con la <b>Reserva</b>. Por último, puedes mover tus soldados a un
                            vértice adyacente a su posición original.
                        </p>
                    </div>
                </div>
                <div className="instructions-key-concepts" style={
                    getPosicionamiento(i, 3)
                }>
                    <div className="title-wrapper vertical">
                        <img src={constructionImg} alt="" />
                        <h2 className="pretty-font instruction-subtitle">Reglas de Construcción y Reclutamiento</h2>
                    </div>
                    <div className="ol-li-content">
                        <p>
                            Para construir o reclutar, debes tener los recursos necesarios.
                        </p>
                            <ul>
                                <li>Asentamiento: 1 <b>Madera</b>, 1 <b>Trigo</b>, 1 <b>Oveja</b>.</li>
                                <li>Carretera: 1 <b>Madera</b>, 1 <b>Piedra</b>.</li>
                                <li>Ciudad: 3 <b>Trigo</b>, 2 <b>Arcilla</b>, 1 <b>Oveja</b>.</li>
                                <li>Arquero: 1 <b>Trigo</b>, 1 <b>Oveja</b>.</li>
                                <li>Guerrero: 1 <b>Trigo</b>, 1 <b>Piedra</b>.</li>
                            </ul>
                        <p>
                            Para poder construir una carretera esta debe estar adyacente a una carretera ya 
                            existente o a un asentamiento/ciudad, en ambos casos estas deben ser propiedad tuya.
                        </p>
                        <p>
                            Para poder construir una ciudad esta debe reemplazar un asentamiento tuyo y para poder construir
                            un asentamiento este debe estar adyacente a una carretera tuya y debe estar a una distancia de 2 vertices 
                            de cualquier asentamiento/ciudad ya existente. Es decir, cada asentamiento/ciudad prohibe la
                            construccion de asentamientos/ciudades en sus vértices adyacentes. Tenemos un minijuego para que puedas probar tus conocimientos sobre las reglas de construcción.
                        </p>
                        <div className="miniGame-container">
                            <button className="miniGame-btn" onClick={(e) => {
                                redirect("/instructions/miniGame");
                            }}>Click Aquí para entrar al minijuego</button>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="instructions-key-concepts" style={
                    getPosicionamiento(i, 4)
                }>
                    <div className="title-wrapper vertical">
                        <img src={comerceImg} alt="" />
                        <h2 className="pretty-font instruction-subtitle">Comercio</h2>
                    </div>
                    <div className="ol-li-content">
                        <p>
                            El comercio se realiza con la <b>Reserva</b>. La <b>Reserva</b> tiene un stock de recursos
                            limitado. Para comerciar debes entregarle a la <b>Reserva</b> 4 recursos iguales y a cambio
                            recibirás 1 de cualquier otro recurso que elijas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
