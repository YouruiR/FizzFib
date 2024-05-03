import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {

    const apps = ['FizzBuzz', 'Fibonacci', 'FizzFib'];
    return (
        <div id='navbar-container'>
            <nav>
                <ul>
                    {apps.map((app, index) => (
                        <li key={index} className="app">
                            <Link to={`/${app.toLowerCase()}`}>{app}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;