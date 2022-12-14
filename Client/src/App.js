import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Notes from './Components/Notes';
// import NoteContext from './Context/notes/NoteContext'; 
import NoteState from './Context/notes/NoteState';


function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/notes" element={<Notes />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
