import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "../profile/Profile"
import LandingPage from "../landing-page/LandingPage"
import Instructions from "../game/instructions/Instructions"
import Login from "../profile/Login/Login"
import GameRoom from "../game/GameRoom/GameRoom"
import AboutUs from "../about-us/AboutUs"
import Description from "../description/Description"
import MiniGame from "../game/GameRoom/MiniGame"

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/instructions" element={<Instructions/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/" element={<LandingPage/>} />
                <Route path="/game" element={<GameRoom/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/about-us" element={<AboutUs/>} />
                <Route path="/main-content" element={<Description/>} />
                <Route path="/instructions/minigame" element={<MiniGame/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing