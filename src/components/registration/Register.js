import React from "react";
import axios from "axios";


const Register = ({un, pw, fn, ln, email, setcheckReg}) => {


    const pdefaul = (e) => {
        e.preventDefault();
        
        const body = { "username": un, "firstname": fn, "lastname": ln, "email": email, "password": pw }
        const headers = {
            'Content-Type': 'application/json'
        }
        axios.post('http://127.0.0.1:5000/user', body, {headers})
        .then(function (response){
            console.log(response)
            if(response.status === 200){
                setcheckReg(1)
            }
        })
    }

 
    return(
        <button onClick={pdefaul} >Register</button>
    )
}

export default Register;