import React from "react"
import {Link} from "react-router-dom";
import './Header.css';


function Header({loggedIn}) {
    return (
        <div className="navigation-bar">
            <Link className="logo" to='/'>
                <span className="blue">C</span>
                <span className="red">$</span>
                <span className="yellow">5</span>
                <span className="green">0</span>
                <span className="red"> Finance</span>
            </Link>
            {loggedIn ? [
                <Link to='/quote'>Quote</Link>,
                <Link to='/buy'>Buy</Link>,
                <Link to='/sell'>Sell</Link>,
                <Link to='/history'>History</Link>,
            ] : null}
            <div className="access-navigation-links">
                {loggedIn ? <Link to='/logout'>Logout</Link> : [
                    <Link to='/register'>Register</Link>,
                    <Link to='/login'>Log In</Link>
                ]}
            </div>
        </div>
    );
}

export default Header;