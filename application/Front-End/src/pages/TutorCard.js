import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function TutorCard() {
    return (
        <Fragment>
            <div  className="CardStyle">
                <img src={require('../images/sillouette.jpg')} alt="EMPTY" className="proPic"  />
                <div className='cardText'>
                    <h2><i>Full Name</i></h2>
                    <h3><i>Main Subject Proficiency</i></h3>
                    <i>Summary of Tutors Description</i>
                    <br></br>
                    <div className='buttonHold'>         
                        <button className='cardbutton'>Contact</button>
                        <button className='cardbutton'>View</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TutorCard;