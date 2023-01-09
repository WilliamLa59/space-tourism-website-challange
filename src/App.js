import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Destination } from './components/Destination';
import { Crew } from './components/Crew';
import { Technology } from './components/Technology';

function App() {
  return (
    <Router>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}  style={{backgroundImage: "url(../assets/home/background-home-desktop.jpg)"}}/>
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>

    </Router>
  );
}

export default App;
