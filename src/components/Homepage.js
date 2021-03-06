import React from "react";
import { Link } from 'react-router-dom';

const Homepage = () => {
    return(
        <div>
            <h1>Welcome to Crop Management</h1>
            <h3>Get started!</h3>
            <p>
                Hit the link below to get started on crop Management, once you sign up you'll be able to add your flowers and vegitables to your system!
                Make sure you add friends so they can see what crops you have planted!
            </p>
            <Link to="/login">Login</Link>
            <p>Or</p>
            <Link to="/registration">Sign up here!</Link>
        </div>
    )
}

export default Homepage