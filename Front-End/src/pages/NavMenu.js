import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function NavMenu() {
    return(
        <Fragment>
            <div className="nav_links">
                <Link to="/"><h2 className="logo"><b><i>Cheep</i></b></h2></Link>

                <div className="menu">
                    <Link to="/"><b>Home</b></Link>
                    <Link to="/about"><b>About Us</b></Link>
                    <Link to="/"><b>Tutors</b></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default NavMenu;