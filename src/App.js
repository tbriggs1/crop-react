import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import DashHomepage from "./components/dashboard/dashHomepage";
import Homepage from "./components/Homepage";
import Registration from "./components/registration/Registration";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/registration" element={<Registration />}/>
          <Route path="/dashboard" element={<DashHomepage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
