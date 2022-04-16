import React from "react";

const Register = ({un, pw, fn, ln, email}) => {

    const pdefaul = (e) => {
        e.preventDefault();
        
        
    }

    return(
        <button onClick={pdefaul} >Register</button>
    )
}

export default Register;