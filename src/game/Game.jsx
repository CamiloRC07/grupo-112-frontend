import Board from "./board/Board";
import "./Game.css";
import axios from "axios";
import API_URL from '../common/config' ;
import AlertMessage from "../common/alert-message/AlertMessage";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import Build from "./board/actions/Build";

export const GameContext = createContext();

function Game() {

    const userId = 0;
    const { token, alertMessage, setAlertMessage } = useContext(AuthContext);
    const [gameId, setGameId] = useState(null);

    const [typePiece, setTypePiece] = useState(null);
    const [canBuild, setCanBuild] = useState(false);
    const [canBuildRoad, setCanBuildRoad] = useState(false);
    const [canCreateWarrior, setCanCreateWarrior] = useState(false);
    const [canCreateArcher, setCanCreateArcher] = useState(false);
    const [canUpgrade, setCanUpgrade] = useState(false);
    const [canMoveUnit, setMoveUnit] = useState(false);
    const [wantComercio, setWantComercio] = useState(false);
    const [user, setUser] = useState(null);
    const [gameStatus, setGameStatus] = useState([]);
    const [turn, setTurn] = useState(null);
    const [playerInTurn, setPlayerInTurn] = useState(null);
    const [userPlayer, setUserPlayer] = useState(null);
    const [piecesBuilt, setPiecesBuilt] = useState(null);
    const [hexDistribution, SetHexDistribution] = useState({})
    const [vertexClicked, setVertexClicked] = useState(null);
    const [edgeClicked, setEdgeClicked] = useState(null);

    async function getGameId() {
        const config = {
            method: 'get',
            url: `${API_URL}/game/my/game`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        axios(config)
            .then(response => {
                console.log(response.data);
                setGameId(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    async function getGameStatus(UserId, GameId) {
        const config = {
            method: 'get',
            url: `${API_URL}/game/${GameId}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        axios(config)
            .then(response => {
                console.log(response.data);
                setGameStatus(response.data);
                setTurn(response.data.game.round);
                setPiecesBuilt(response.data.piecesBuilt);
                getPlayerInTurnName(response.data);
                SetHexDistribution(JSON.parse(response.data.game.Board.hexDistribution));
                getUserPlayer(response.data);
                setCanBuild(false);
                setCanUpgrade(false);
                setCanCreateWarrior(false);
                setCanCreateArcher(false);
                setWantComercio(false);
            })
            .catch(error => {
                console.log(error);
            })
    }

    async function patchThrowDie(UserId, GameId) {
        const config = {
            method: 'patch',
            url: `${API_URL}/game/${GameId}/throwDie`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        axios(config)
            .then(response => {
                console.log(`${API_URL}/game/${GameId}/throwDie`);
                console.log(response.data);
                setGameStatus(response.data);
            })
            .catch(error => {
                console.log(error);
                setAlertMessage('Error al tirar los dados');
            })
    }

    async function patchPassTurn(UserId, GameId) {
        const config = {
            method: 'patch',
            url: `${API_URL}/game/${GameId}/passRound`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        axios(config)
            .then(response => {
                console.log(`${API_URL}/game/${GameId}/passRound`);
                console.log(response.data);
                setGameStatus(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGameStatus = () => {
        getGameStatus(userId, gameId);
    }

    const handleThrowDice = () => {
        patchThrowDie(userId, gameId);
    }

    const handlePassTurn = () => {
        patchPassTurn(userId, gameId)
    }

    const handleVertexClick = (vertex) => {
        if (piecesBuilt !== null) {
            setCanBuildRoad(false);
            setEdgeClicked(null);
            const piecesInPosition = piecesBuilt.filter(piece => {
                return piece.position === vertex.id;
            })
            if (piecesInPosition.length === 0) {
                // puedo construir asentamiento
                console.log('puedo construir asentamiento')
                setCanBuild(true);
                setCanCreateWarrior(false);
                setCanCreateArcher(false);
                setCanUpgrade(false);
                setMoveUnit(false);
                setCanBuildRoad(false);
                setTypePiece(0);
            } else {
                const piecesOwned = piecesInPosition.filter( piece => {
                    return piece.playerId === userPlayer.id;
                })

                if (piecesOwned === 0) {
                    // no construir puedes, esta ocupada
                    setCanBuild(false);
                    setCanCreateWarrior(false);
                    setCanCreateArcher(false);
                    setCanUpgrade(false);
                    setMoveUnit(false);
                } else {
                    if (piecesOwned.length === 1) {
                        if (piecesOwned[0].type === 0 || piecesOwned[0].type === 1) {
                            // crear unit
                            setCanBuild(false);
                            setCanUpgrade(false);
                            setCanCreateWarrior(true);
                            setCanCreateArcher(true);
                        }
                        if (piecesOwned[0].type === 0) {
                            // upgrade
                            setCanUpgrade(true);
                        }
                        if (piecesOwned[0].type === 3 || piecesOwned[0].type === 4) {
                            // mover unit
                            setMoveUnit(true);
                        }
                    }
                    else if (piecesOwned.length === 2) {
                        if (piecesOwned[0].type === 0 || piecesOwned[1].type === 0) {
                            setCanUpgrade(true);
                            setCanBuild(false);
                        }
                        if (piecesOwned[0].type === 3 || piecesOwned[0].type === 4) {
                            // mover unit
                            setMoveUnit(true);
                            setCanCreateWarrior(false);
                            setCanCreateArcher(false);
                            setCanBuild(false);
                        }
                        if (piecesOwned[1].type === 3 || piecesOwned[1].type === 4) {
                            // mover unit
                            setMoveUnit(true);
                            setCanCreateWarrior(false);
                            setCanCreateArcher(false);
                            setCanBuild(false);
                        }
                    }
                }
            }
        }
    }

    const handleEdgeClick = (edge) => {
        setVertexClicked(null);
        if (piecesBuilt !== null) {
            const roadInThatPosition = piecesBuilt.filter(piece => {
                return (piece.position === edge.id && piece.type === 2);
            })
            if (roadInThatPosition.length === 0) {
                setCanBuildRoad(true);
            } else {
                setCanBuildRoad(false);
            }
        }
        setCanBuild(false);
        setCanUpgrade(false);
        setCanCreateArcher(false);
        setCanCreateWarrior(false);
        setMoveUnit(false);
        setWantComercio(false);
    }

    const getPlayerInTurnName = (data) => {
        const idPlayer = data.game.playerInTurn;
        const users = data.users;
        let player = null;
        users.forEach(user => {
            if (user.Player.id === idPlayer) {
                player = {
                    username: user.name,
                    color: user.Player.color
                };
            }
        });

        if (player !== null) {
            setPlayerInTurn(player);
        }
    }

    const getUserPlayer = (data) => {
        const userId = user.id;
        const users = data.users;
        let player = null;
        users.forEach(user => {
            if (user.id === userId) {
                player = user.Player;
            }
        });

        if (player !== null) {
            setUserPlayer(player);
            console.log(player)
        }
    }

    const getUserInfo = () => {
        const config = {
            method: 'get',
            url: `${API_URL}/users/find/me`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        axios(config)
            .then(response => {
                console.log(response.data);
                setUser(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect( () => { getUserInfo(); getGameId(); }, [])

    useEffect( () => {
        getGameStatus(userId, gameId);
    }, [user, gameId])
    return (
        <GameContext.Provider value={{
            vertexClicked,
            edgeClicked,
            turn,
            playerInTurn,
            saveVertex: setVertexClicked,
            setVertexClicked,
            setEdgeClicked,
            setGameStatus,
            handleVertexClick,
            handleEdgeClick
        }}>
            <h1 className="title-font">Game</h1>
            <div className="board-and-instructions">
                <Board HexDistribution={hexDistribution}/>
                <div className="instructions-and-stats">
                    <h2 className="pretty-font">Acciones</h2>
                    <AlertMessage message={alertMessage}></AlertMessage>
                    <div className="status-throw">
                        <button onClick={handleGameStatus}>Actualizar juego</button>
                        <button onClick={handleThrowDice}>Tirar dados</button>
                    </div>
                    <div className="pass-comercio">
                        <button onClick={handlePassTurn}>Finalizar turno</button>
                        <button onClick={() => setWantComercio(true)}>Comerciar</button>
                    </div>
                    <br />
                    {canBuild && <Build typePiece={typePiece} gameId={gameId} actionText={'Construir asentamiento'}></Build>}
                    {canCreateWarrior && <Build typePiece={4} gameId={gameId} actionText={'Contratar guerrero'}></Build>}
                    {canCreateArcher && <Build typePiece={3} gameId={gameId} actionText={'Contratar arquero'}></Build>}
                    {canUpgrade && <Build typePiece={1} gameId={gameId} actionText={'Mejorar asentamiento'}></Build>}
                    {canBuildRoad && <Build typePiece={2} gameId={gameId} actionText={'Construir carretera'}></Build>}
                    {wantComercio && <Build typePiece={null} gameId={gameId} actionText={'Comercio malo'}></Build>}
                    <p>Mueve el mouse sobre el tablero para colocar un asentamiento.</p>
                    <p>Espera tu turno, refresca el estado del juego con el botón.</p>
                    <p>Cerca de los asentamientos puedes colocar carreteras.</p>
                    <p>Para mover una unidad, primero toca en el tablero la unidad que quieres mover y luego la posición. Los ataques ocurren automáticamente.</p>
                    <div>
                        <p>Recursos</p>
                        <p></p>
                    </div>
                </div>
            </div>
            
        </GameContext.Provider>
    )
}

export default Game