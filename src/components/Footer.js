import React from "react"
import {Link} from "react-router-dom";
import './Footer.css'
function Footer() {
    return(
        <div className="note-footer">Data provided for free by

        <Link to='https://iextrading.com/developer/'> IEX.</Link>View
        <Link to='https://iextrading.com/api-exhibit-a/'> IEX’s Terms of Use.</Link>
        </div>
    );
}
export default Footer;