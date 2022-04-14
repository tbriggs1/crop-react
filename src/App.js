import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Homepage from "./components/Homepage";
import Registration from "./components/registration/Registration";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/registration" element={<Registration />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
