import { useState } from 'react';
import axios from "axios";
import { Link, Navigate } from 'react-router-dom';

function Login(props) {

    const [loginForm, setloginForm] = useState({
      username: "",
      password: ""
    })

    function logMeIn(event) {
      axios({
        method: "POST",
        url:"http://localhost:5000/auth",
        data:{
          username: loginForm.email,
          password: loginForm.password
         }
      })
      .then((response) => {
        props.setToken(response.data.access_token)
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
          }
      })

      setloginForm(({
        email: "",
        password: ""}))

      event.preventDefault()
      
    }

    function handleChange(event) { 
      const {value, name} = event.target
      setloginForm(prevNote => ({
          ...prevNote, [name]: value})
      )}


    
    return (
      <div>
        <h1>Login</h1>
          <form className="login">
            <input onChange={handleChange} 
                  type="email"
                  text={loginForm.email} 
                  name="email" 
                  placeholder="username" 
                  value={loginForm.email} />
            <input onChange={handleChange} 
                  type="password"
                  text={loginForm.password} 
                  name="password" 
                  placeholder="Password" 
                  value={loginForm.password} />

          <button onClick={logMeIn}>Submit</button>
        </form>
        <Link to="/registration">Sign up here!</Link>
      </div>
    );
}

export default Login;

