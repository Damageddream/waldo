import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Game from "./Game";
import End from "./End";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/game" element={<Game />} />
        <Route path='/end' element={<End />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
