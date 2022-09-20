import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Routes exact path="/">
          {/* Add Home component */}
        </Routes>
      </Switch>
    </Router>
    </>
  );
}

export default App;
