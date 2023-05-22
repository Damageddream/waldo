import GameBoard from "./GameBoard";
import Timer from "./Timer";
import { useState } from "react";
const Game = () => {

    const [time, setTime] = useState(null)

    const passTime = (time) => {
        setTime(time)
    }
    return(
        <div>
            <Timer passTime={passTime} />
            <GameBoard time={time}/>  
        </div>
    )

}

export default Game;