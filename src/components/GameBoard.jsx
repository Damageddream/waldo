import board from '../images/board.jpg'
import '../styles/gameboard.css'
import { useState } from 'react'




const GameBoard = () => {

    const [clickXY, setClickXY] = useState({x:null,y:null})

    const checkHandler = (element) => {
        setClickXY({x:element.pageX, y:element.pageY})
    }




    return(
        <div className='board'>
            <img onClick={checkHandler} className='boardPic' src={board} alt='all of characters' />
            <div className='crash'></div>
            <div className='vash'></div>
            <div className='marvin'></div>
        </div>
    )
}

export default GameBoard;