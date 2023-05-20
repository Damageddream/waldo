import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Game from "./Game";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
