import { Link } from "react-router-dom";


function Header(props) {

  function logMeOut() {
        props.token();
    }

    return(
        <header className="App-header">
            <button><Link to='/'>Home</Link></button>
            <button onClick={logMeOut}> 
                Logout
            </button>
        </header>
    )
}

export default Header;
