import './LetsPlayButton.css'

function LetsPlayButton() {
    return(
        <div className='lets-play-div'>
            <p>Comienza tu aventura para convertirte en maestro conquistador de Cathay.</p>
            <form action="/game">
                <input className="lets-play-button" type="submit" value="Let's Play" />
            </form>
        </div>
    )
}

export default LetsPlayButton