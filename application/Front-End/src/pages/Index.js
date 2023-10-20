import React, { Fragment } from 'react';
import NavMenu from './NavMenu';
import SearchBar from './SearchBar';

function Index() {
    return (
        <Fragment>
            <NavMenu /> 
            <div className="searchBox">
                <div className="titleBox">
                    <h2 className="center"><i>Best Place to find SFSU tutors</i></h2>
                    <h2 className="center"><i>for SFSU Students</i></h2>
                </div>

                <SearchBar />

                <div className="bottomTitleBox">
                    <h4 className="center"><i>One of the greatest collection of San Francisco State Universtiy experts in 100+ subjects ready to educate you on your time!</i></h4>
                </div>
                
                <div className="RecentlyApplied">
                <h2 className="recent" ><i>Recently Applied</i></h2>
                    <img src={require('../images/sfLibrary.png')} alt="SFSU Library" className="libraryPic" />
                    <div className="ContainterForRecents">
                        <div  className="CardStyle">
                        <img src={require('../images/sillouette.jpg')} alt="EMPTY" className="proPic"  />
                            <div className='cardText'>
                                <h2 ><i>Full Name</i></h2>
                                <h3 ><i>Main Subject Proficiency</i></h3>
                                <i>Summary of Tutors Description</i>
                                <br></br>
                                <div className='buttonHold'>   
                                    <button className='cardbutton'>Contact</button>
                                    <button className='cardbutton'>View</button>
                                </div>
                            </div>
                        </div>
                        <div  className="CardStyle">
                        <img src={require('../images/sillouette.jpg')} alt="EMPTY" className="proPic"  />
                            <div className='cardText'>
                                <h2 ><i>Full Name</i></h2>
                                <h3 ><i>Main Subject Proficiency</i></h3>
                                <i>Summary of Tutors Description</i>
                                <br></br>
                                <div className='buttonHold'>   
                                    <button className='cardbutton'>Contact</button>
                                    <button className='cardbutton'>View</button>
                                </div>
                            </div>
                        </div>
                        <div  className="CardStyle">
                        <img src={require('../images/sillouette.jpg')} alt="EMPTY" className="proPic"  />
                            <div className='cardText'>
                                <h2 ><i>Full Name</i></h2>
                                <h3 ><i>Main Subject Proficiency</i></h3>
                                <i>Summary of Tutors Description</i>
                                <br></br>
                                <div className='buttonHold'>   
                                    <button className='cardbutton'>Contact</button>
                                    <button className='cardbutton'>View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Index;