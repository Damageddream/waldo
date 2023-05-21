import { useState, useEffect } from "react";

const Picker = ({ x, y, target }) => {
  const pickerStyle = {
    position: "absolute",
    left: x,
    top: y,
    backgroundColor: "white",
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (x) {
      setShow(true);
    }
  }, [x]);

  // check if guess is correct and return inforamtion based on result
  const quessChecker = (e) => {
    const guess = e.target.innerText.toLowerCase()
    if(guess === target){
        console.log('win')
    }
    else{
        console.log('try again')
    }
    setShow(false)
  }


  return (
    show && (
      <div className="picker" style={pickerStyle}>
        <div onClick={quessChecker} className="vashPick pick">
          <div className="name">Vash</div>
        </div>
        <div onClick={quessChecker} className="crashPick pick">
          <div className="name">Crash</div>
        </div>
        <div onClick={quessChecker} className="marvinPick pick">
          <div className="name">Marvin</div>
        </div>
      </div>
    )
  );
};

export default Picker;
