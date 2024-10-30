import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fav from "./pages/Fav";
import "./styles/index.scss";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Fav />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
