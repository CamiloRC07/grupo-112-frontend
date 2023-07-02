import { useContext, useState } from "react";
import { AuthContext } from "../../auth/AuthContext";



function LogOutButton() {
    const { logout, setAlertMessage } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        setAlertMessage('Sesión cerrada con éxito!')
    }

    return (
        <>
            <button onClick={handleLogout} className="logout-button">
                Cerrar sesión
            </button>
        </>
    )
}

export default LogOutButton