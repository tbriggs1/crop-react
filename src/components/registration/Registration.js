import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";


const Registration = () => {
    const [checkReg, setcheckReg] = useState();

    
    if (checkReg === 1){
        return(
            <Navigate to='/dashboard' />
        )
    }
    return (
        <div>
            <h1>Hello and Welcome to Crop Management!</h1>
            <p>Please enter your details below</p>
            <RegistrationForm setcheckReg={setcheckReg}/>
        </div>
    )
}

export default Registration