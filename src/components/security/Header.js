import { Link } from "react-router-dom";


function Header(props) {

  function logMeOut() {
        props.token();
        console.log(props.creds)
        props.setCreds(({
            username: "",
            password: ""}));
        console.log(props.creds)
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
