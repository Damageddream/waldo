import { useState, useEffect } from "react";
import crash from '../images/crashFpng.png';
import vash from '../images/vashF.png';
import marvin from '../images/marvinF.png'
import '../styles/picker.css'
import { useNavigate } from "react-router-dom";



const Picker = ({ x, y, target, guessHandler, time }) => {
  const pickerStyle = {
    position: "absolute",
    left: x,
    top: y,
    backgroundColor: "white",
    zIndex: 3,
  };

  const [chars, setChars] = useState([{name: 'vash', src:vash}, {name: 'crash', src:crash}, {name:'marvin', src:marvin}])
  const [show, setShow] = useState(false);

  const navigate = useNavigate()

 
  useEffect(()=>{
    if(chars.length === 0){
      guessHandler({ show: false, guess: null })
      navigate('/end', {state: time})
    }
  },[chars])

  useEffect(() => {
    if (x) {
      setShow(true);
      guessHandler({ show: false, guess: null })
      
    }
  }, [x]);

  // check if guess is correct and return inforamtion based on result
  const quessChecker = (e) => {
    const guess = e.target.innerText.toLowerCase()
    if (guess === target) {
      guessHandler({ show: true, guess: true })
      setChars(chars => chars.filter(char=>char.name !== guess))
    }
    else {
      guessHandler({ show: true, guess: false })
    }
    setShow(false)
  }


  return (
    show && (
      <div className="picker" style={pickerStyle}>
        {chars.map((char) => (
          <div onClick={quessChecker} className={`${char.name}Pick pick`} key={char.name}>
            <div className="name">{char.name.toUpperCase()}</div>
            <img className="face" src={char.src} alt={char.name} />

          </div>
        ))}
      </div>
    )
  );
};

export default Picker;
