import { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
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
import RefreshToken from "./components/security/refreshToken";
import useToken from "./components/security/useToken";

function App() {
  const {token, removeToken, setToken} = useToken();
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  })

  return (
    <div className="App">
      <Router>
        <Header token={removeToken} creds={creds} setCreds={setCreds}/>
        <Routes>
          <Route path="/" element={<Homepage />} token={token} setToken={setToken}/>
        </Routes>
          {!token && token!=="" &&token!== undefined?
          <div>
            <Login setToken={setToken} token={token}/>
            <Routes>
            <Route exact path="/registration" element={<Registration token={token} setToken={setToken}/>}></Route>
            </Routes>
          </div>
        :
          <div>
            <RefreshToken creds={creds} setCreds={setCreds} setToken={setToken} token={token}/>
            <Link to='/profile'>Head to your dashboard</Link>
            <Routes>
              <Route exact path="/profile" element={<Profile token={token} setToken={setToken} creds={creds} setCreds={setCreds}/>}></Route>
            </Routes>
          </div>
        }
        {/* <Routes>
          
        </Routes> */}
      </Router>
      
    </div>
  );
}

export default App;
