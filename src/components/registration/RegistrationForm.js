import React, { useState } from "react";
import Register from "./Register";

const RegistrationForm = () => {

    const [username, setUsername] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const cUsername = (e) => {
        setUsername(e.target.value)
    }

    const cFirstname = (e) => {
        setFirstname(e.target.value)
    }

    const cLastname = (e) => {
        setLastname(e.target.value)
    }

    const cEmail = (e) => {
        setEmail(e.target.value)
    }

    const cPassword = (e) => {
        setPassword(e.target.value)
    }


    return(
        <div>
            <form>
                <label>
                    Username:
                    <input onChange={cUsername} type="text" name="username" />
                </label>
                <label>
                    Firstname:
                    <input onChange={cFirstname} type="text" name="firstname" />
                </label>
                <label>
                    Lastname:
                    <input onChange={cLastname} type="text" name="lastname" />
                </label>
                <label>
                    Email:
                    <input onChange={cEmail} type="email" name='email' />
                </label>
                <label>
                    Password:
                    <input onChange={cPassword} type="password" name="password" />
                </label>
                <Register un={username} pw={password} fn={firstname} ln={lastname} email={email}/>
            </form>
        </div>
    )
}

export default RegistrationForm;