import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function NavMenu() {
    return(
        <Fragment>
            <div className="nav_links">
                <Link to="/"><h2 className="logo"><b><i>Cheep</i></b></h2></Link>

                <div className="menu">
                    <Link to="/"><b><i>Become a tutor</i></b></Link>
                    <Link to="/about"><b><i>About Us</i></b></Link>
                    <Link to="/"><b><i>Tutors</i></b></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default NavMenu;