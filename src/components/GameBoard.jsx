import board from '../images/board.jpg'
import '../styles/gameboard.css'
import { useState } from 'react'
import Picker from './Picker'
import GuessInfo from './GuessInfo'

const GameBoard = ({time}) => {

    const [guess, setGuess] = useState({show: false, guess: null})
    const [clickXY, setClickXY] = useState({x:null,y:null})
    const [target, setTarget] = useState(null)

    const checkHandler = (element) => {
        setClickXY({x:element.pageX, y:element.pageY})
        setTarget(element.target.className)
    }

    const guessHandler = (guess) =>{
        setGuess(guess)
    }


    return(
        <div className='board'>
            {guess.show && <GuessInfo guess = {guess.guess} />}
            <Picker x={clickXY.x} y={clickXY.y} target={target} guessHandler={guessHandler} time={time}/>
            <img onClick={checkHandler} className='boardPic' src={board} alt='all of characters' />
            <div data-testid='crash' onClick={checkHandler} className='crash'></div>
            <div data-testid='vash' onClick={checkHandler} className='vash'></div>
            <div data-testid='marvin' onClick={checkHandler} className='marvin'></div>
        </div>
    )
}

export default GameBoard;