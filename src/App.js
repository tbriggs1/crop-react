import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import DashHomepage from "./components/dashboard/dashHomepage";
import Homepage from "./components/Homepage";
import Registration from "./components/registration/Registration";
import Header from "./components/security/Header";
import Login from "./components/security/Login";
import Profile from "./components/security/Profile";
import useToken from "./components/security/useToken";

function App() {
  const {token, removeToken, setToken} = useToken();

  return (
    <div className="App">
      <Router>
        <Header token={removeToken}/>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
          {!token && token!=="" &&token!== undefined?
        <Routes>
          <Route path="/registration" element={<Registration />} setToken={setToken}/>
          <Route path="/login" element={<Login setToken={setToken} token={token}/>} />
        </Routes>
        :
          <Routes>
            <Route path="/login" element={<Login setToken={setToken} token={token}/>} />
            <Route exact path="/profile" element={<Profile token={token} setToken={setToken}/>}></Route>
          </Routes>
        }
        {/* <Routes>
          
        </Routes> */}
      </Router>
      
    </div>
  );
}

export default App;
