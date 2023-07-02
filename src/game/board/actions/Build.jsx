import { useContext, useState } from 'react'
import { GameContext } from '../../Game';
import { AuthContext } from '../../../auth/AuthContext';
import API_URL from '../../../common/config';
import axios from 'axios';

function Build( {typePiece, gameId, actionText}) {

    const [piece, setPiece] = useState(null);
    const { token } = useContext(AuthContext);
    const {
        vertexClicked,
        edgeClicked,
        setVertexClicked,
        setEdgeClicked,
        setGameStatus,

    } = useContext(GameContext);

    async function patchBuild() {
        if (vertexClicked !== null || edgeClicked !== null) {
            let piece;

            if (vertexClicked === null) {
                piece = edgeClicked;
            }
            if (edgeClicked === null) {
                piece = vertexClicked;
            }

            console.log(`Piece ${piece.id} clicked: (${piece.xPos}, ${piece.yPos})`);
            const config = {
                method: 'patch',
                url: `${API_URL}/game/${gameId}/build`,
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                data: {
                    type: typePiece,
                    position: piece.id
                }
            }
            setVertexClicked(null);
            setEdgeClicked(null)
            axios(config)
                .then(response => {
                    console.log(`${API_URL}/game/${gameId}/build`);
                    console.log(response.data);
                    setGameStatus(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
            
        }
    }

    return (
        <div className="build-ui">
            <button onClick={patchBuild}>{actionText}</button>
        </div>
    )
}

export default Build