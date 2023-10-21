import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Template from "./Template";
function TutorCard({result}) {
    console.log(result);
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/template`; 
      navigate(path);
    }
    //This is allowing for place holder cards in Index.js. 
    if(result == null){
    return(    <Fragment>
        <div  className="CardStyle">
            <img src={require('../images/sillouette.jpg')} alt="EMPTY" className="proPic"  />
            <div className='cardText'>
                <h2><i>Full Name</i></h2>
                <h3><i>Profession</i></h3>
                <i>Description</i>
                <br></br>
                <div className='buttonHold'>         
                    <button className='cardbutton'onClick={routeChange}>Contact</button>
                    <button className='cardbutton'>View</button>
                </div>
            </div>
        </div>
    </Fragment>)
    }


    // Used when We have search results in Index.js
    return (
        <Fragment>
            <div  className="CardStyle">
                <img src={require('../images/sillouette.jpg')} alt="EMPTY" className="proPic"  />
                <div className='cardText'>
                    <h2><i>{result.name}e</i></h2>
                    <h3><i>{result.email}</i></h3>
                    <i>
                        {result.address.street} 
                        {result.address.zipcode}
                    </i>
                    <br></br>
                    <div className='buttonHold'>         
                        <button className='cardbutton'onClick={routeChange}>Contact</button>
                        <button className='cardbutton'>View</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TutorCard;