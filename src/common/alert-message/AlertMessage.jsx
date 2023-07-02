import { useContext, useEffect } from "react"
import { AuthContext } from "../../auth/AuthContext"




function AlertMessage({message}) {

    const { alertMessage, setAlertMessage} = useContext(AuthContext);
    
    const blankMessage = () => {
        setAlertMessage('');
    }

    useEffect(() => {
        setAlertMessage(message);
    }, [])

    return (
        <div>
            {alertMessage.length > 0 && 
            <div>
                <p>{alertMessage}</p>
                <button onClick={blankMessage}>X</button>
            </div>}
        </div>
        
    )
}

export default AlertMessage