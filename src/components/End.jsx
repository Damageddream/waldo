import { useLocation } from "react-router-dom";
import { timeFormater } from "./Utilities";
import { useState } from "react";
import { initializeApp, } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore"
import Leaderboard from "./Leaderboard";
import '../styles/end.css'

const firebaseConfig = {
    apiKey: "AIzaSyByoySIq6gganFiKev-3jQiSufBA5W6UZk",
    authDomain: "waldo-e059f.firebaseapp.com",
    projectId: "waldo-e059f",
    storageBucket: "waldo-e059f.appspot.com",
    messagingSenderId: "287314369245",
    appId: "1:287314369245:web:896560ddf8e0b461a61934"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const End = () => {
    const location = useLocation();
    const timeFormat = timeFormater(location.state);
    const [name, setName] = useState('')
    const [showForm, setShowForm] = useState(true)
    const [times, setTimes] = useState([])

    const inputHandler = (e) => {
        setName(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        await addDoc(collection(db, 'times'), {
            name: name,
            time: location.state
        })
        setTimes(prevTimes => [...prevTimes, { name: name, time: location.state }])
        setShowForm(false)
    }

    return (<div className="end">
        <div className="youTime">Your time is <span>{timeFormat.time}</span></div>
        {showForm && <form onSubmit={submitHandler}>
            <label htmlFor="name">Add your name:</label>
            <input value={name} onChange={inputHandler} id='name' type="text" />
            <button type="submit" className="submit btn">Add</button>
        </form>}

        <Leaderboard db={db} updateTimes={setTimes} addedTime={showForm} />
    </div>);
};

export default End;
