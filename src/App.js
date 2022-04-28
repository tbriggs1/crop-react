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
import useToken from "./components/security/useToken";

function App() {
  const {token, removeToken, setToken} = useToken();


  return (
    <div className="App">
      <Router>
        <Header token={removeToken}/>
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
            <Link to='/profile'>Head to your dashboard</Link>
            <Routes>
              <Route exact path="/profile" element={<Profile token={token} setToken={setToken}/>}></Route>
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
