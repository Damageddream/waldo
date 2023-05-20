import "../styles/homepage.css";
import crash from "../images/crash.png";
import vash from "../images/vash.png";
import marvin from "../images/marvin.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homeMain">
      <div className="homeTitle">Find Characters</div>
      <div className="characters">
        <img className="charPic" src={crash} alt="crash bandicoot" />
        <img className="charPic" src={vash} alt="vash the stampede" />
        <img className="charPic" src={marvin} alt="marvin the martian" />
      </div>
      <div className="rules">
        <ul>
          <li>
            Find one of the 3 characters: Crash Bandicoot, Marvin The Martian,
            Vash the Stampede
          </li>
          <li>
            Click on it, choose from the list, what character are you guessing
          </li>
          <li>If you are correct, you will get confirmation message</li>
          <li>
            When you find all 3, you win and your time will be added to
            leaderboard
          </li>
          <li>GL HF!</li>
        </ul>
      </div>
      <Link to="/game">
        <button className="btn start">Start Game</button>
      </Link>
    </div>
  );
};

export default Homepage;
