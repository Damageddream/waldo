import board from '../images/board.jpg'
import '../styles/gameboard.css'

const checkHandler = (element) => {
    console.log(element)
}


const GameBoard = () => {
    return(
        <div>
            <img onClick={checkHandler} className='boardPic' src={board} alt='all of characters' />
            <div className='crash'></div>
            <div className='vash'></div>
            <div className='marvin'></div>
        </div>
    )
}

export default GameBoard;