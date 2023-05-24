import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { timeFormater } from "./Utilities";
import '../styles/leaderboard.css'


const Leaderboard = ({ db, addedTime }) => {

    const [times, seTimes] = useState([])
    const [sortedTimes, setSortedTimes] = useState([])

    const fetchPost = async () => {
        console.log('start fetching')
        await getDocs(collection(db, "times"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                seTimes(newData);
            })
            console.log('finished fetching')
    }

    useEffect(() => {
        fetchPost()
    }, [addedTime])

    useEffect(() => {
        const sorted = [...times]
        sorted.sort((a, b) => a.time - b.time)
        setSortedTimes(sorted)
    }, [times])

    let num = 1;

    return (<div className="leader">
        <div className="leadTitle">Leaderboard: </div>
        {sortedTimes.map((time) => (
            <div key={time.id} className="singleTime">
                <div>{num++}.</div>
                <div>{time.name}</div>
                <div>{timeFormater(time.time).time}</div>
            </div>
        ))}
    </div>)
}

export default Leaderboard;