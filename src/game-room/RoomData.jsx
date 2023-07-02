import { useContext } from 'react'
import './GameRoom.css'
import { GameRoomContext } from './GameRoomsList'

function RoomData({id, owner, countUsersInside}) {
    
    const { joinGameRoom } = useContext(GameRoomContext)

    const joinClick = () => {
        joinGameRoom(id);
    }

    return (
        <div className="room-data">
            <div>{id}</div>
            <div>{owner}</div>
            <div>{countUsersInside}/4</div>
            <button onClick={joinClick}>Unirse</button>
        </div>
    )
}

export default RoomData