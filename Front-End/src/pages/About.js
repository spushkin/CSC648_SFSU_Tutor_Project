import React, { Fragment } from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';

function About() {
    return(
        <Fragment>
            <NavMenu />
            <div>
                <div className="inter">
                    <h1 className="center"><b>Software Engineer Class SFSU</b></h1>
                    <h2 className="center"><b>&lt;Fall , 2023&gt;</b></h2>
                    <div className="bar"></div>
                    <h3 className="center"><b>Team 05 | Section 03</b></h3>
                </div>

                <div className="photo-grid">
                    <div className="team-member">
                        <a href="#"><div className="member-photo"></div></a>
                        <a href="#"><h4 className="center">Name</h4></a>
                        <a href="#"><h5 className="center">role</h5></a>
                    </div>
                    <div className="team-member">
                        <Link to="/template"><div className="member-photo"></div></Link>
                        <a href="#"><h4 className="center">Name</h4></a>
                        <a href="#"><h5 className="center">role</h5></a>
                    </div>
                    <div className="team-member">
                        <a href="#"><div className="member-photo"></div></a>
                        <a href="#"><h4 className="center">Name</h4></a>
                        <a href="#"><h5 className="center">role</h5></a>
                    </div>
                    <div className="team-member">
                        <a href="#"><div className="member-photo"></div></a>
                        <a href="#"><h4 className="center">Name</h4></a>
                        <a href="#"><h5 className="center">role</h5></a>
                    </div>
                    <div className="team-member">
                        <a href="#"><div className="member-photo"></div></a>
                        <a href="#"><h4 className="center">Name</h4></a>
                        <a href="#"><h5 className="center">role</h5></a>
                    </div>
                    <div className="team-member">
                        <a href="#"><div className="member-photo"></div></a>
                        <a href="#"><h4 className="center">Name</h4></a>
                        <a href="#"><h5 className="center">role</h5></a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About;