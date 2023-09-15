import React, { Fragment } from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';

function About() {
    return (
        <Fragment>
            <NavMenu />
            <div>
                <div className="interFont">
                    <h1 className="center"><b>Software Engineer Class SFSU</b></h1>
                    <h2 className="center"><b>&lt;Fall , 2023&gt;</b></h2>
                    <div className="bar"></div>
                    <h3 className="center"><b>Team 05 | Section 03</b></h3>
                </div>

                <div className="photo-grid">
                    <div className="team-member">
                        <Link to="/daivikpurani"><img src={require('../images/Profile_Daivik.jpeg')} alt="DaivikPurani" className="aboutPhotoPage" /></Link>
                        <Link to="/daivikpurani"><h4 className="center">Daivik Purani</h4></Link>
                        <Link to="/daivikpurani"><h5 className="center">Team Lead</h5></Link>
                    </div>
                    <div className="team-member">
                        <Link to="/jovannyramos"><img src={require('../images/Profile_Jovanny.png')} alt="Jovanny Ramos" className="aboutPhotoPage" /></Link>
                        <Link to="/jovannyramos"><h4 className="center">Jovanny Ramos</h4></Link>
                        <Link to="/jovannyramos"><h5 className="center">Front End Lead</h5></Link>
                    </div>
                    <div className="team-member">
                        <Link to="/williamambriz"><img src={require('../images/William.jpeg')} alt="William Ambriz" className="aboutPhotoPage" /></Link>
                        <Link to="/williamambriz"><h4 className="center">William Ambriz</h4></Link>
                        <Link to="/williamambriz"><h5 className="center">GitHub Master</h5></Link>
                    </div>
                    <div className="team-member">
                        <Link to="/template"><img src={require('../images/sillouette.jpg')} alt="YOUR NAME HERE" className="aboutPhotoPage" /></Link>
                        <Link to="/template"><h4 className="center">Name</h4></Link>
                        <Link to="/template"><h5 className="center">role</h5></Link>
                    </div>
                    <div className="team-member">
                        <Link to="/siarheipushkin"><img src={require('../images/Profile_Siarhei.jpg')} alt="Siarhei Pushkin" className="aboutPhotoPage" /></Link>
                        <Link to="/siarheipushkin"><h4 className="center">Siarhei Pushkin</h4></Link>
                        <Link to="/siarheipushkin"><h5 className="center">Documentation</h5></Link>
                    </div>
                    <div className="team-member">
                        <Link to="/EsauBMedina"><img src={require('../images/Profile_Esau.jpg')} alt="Esau B. Medina" className="aboutPhotoPage" /></Link>
                        <Link to="/EsauBMedina"><h4 className="center">Esau B. Medina</h4></Link>
                        <Link to="/EsauBMedina"><h5 className="center">Documentation</h5></Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About;