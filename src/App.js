import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Fav from './pages/Fav';
import './styles/index.scss';
function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/fav" element={<Fav/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
