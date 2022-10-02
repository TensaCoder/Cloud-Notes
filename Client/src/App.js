import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import NoteState from './context/notes/NoteState';


function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
