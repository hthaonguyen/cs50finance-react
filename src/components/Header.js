import React from "react"
import {Link} from "react-router-dom";
import './Header.css';
function Header() {
    return(
        <div className="navigation-bar">
            <Link className="logo" to='/'>
                <p>
                    <span className="blue">C</span>
                    <span className="red">$</span>
                    <span className="yellow">5</span>
                    <span className="green">0</span>
                    <span className="red"> Finance</span>
                </p>
            </Link>
            <div className="access-navigation-links">
                <Link to='/register'>Register</Link>
                <Link to='/login'>Log In</Link>
            </div>
        </div>
    );
}
export default Header;