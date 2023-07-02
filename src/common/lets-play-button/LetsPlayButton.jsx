import './LetsPlayButton.css'

function LetsPlayButton({message}) {
    return(
        <div className='lets-play-div'>
            <p>{message}</p>
            <form action="/game">
                <input className="lets-play-button" type="submit" value="Let's Play" />
            </form>
        </div>
    )
}

export default LetsPlayButton