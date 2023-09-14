import React, { Fragment } from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';

const headerStyle = {
    height: '30%', 
    width: '50%',
};

const textBox = {
    height: '70%',
    verticalAlign: 'top',
};

function JovannyRamos() {
    return (
        <Fragment>
            <NavMenu />
            <div id="outer-container">
                <table id="table-info">
                    <tr>
                        <td className='goBackStyle'>
                            <h2 className="interFont"><Link to="/about">Go Back</Link></h2>
                            <h2 className="interFont"><Link to="/about">&lt;</Link></h2>
                        </td>
                        
                        <td style={{width:'20%'}}>
                            <img src={require('../images/Profile_Jovanny.png')} alt="Jovanny Ramos" className="teamPhotoPage" />
                        </td>

                        <td style={{width:'60%'}}>
                            <table id="table-info">
                                <tr>
                                    <td style={headerStyle}>
                                        <h1 id="innerTableStyle">Jovanny Ramos</h1> <br style={{clear: 'left'}}/>
                                        <h3 id="innerTableStyle">Front End Lead</h3> <br style={{clear: 'left'}}/>
                                        <h4 className="interFont" id="innerTableStyle" style={{width: '100%'}}><br /><i>My name is Jovanny Ramos and I am the active Front End Lead of this project. I have worked with C, C++, HTML, Python, Java, Javascript, SQL, Scheme but have the most experience in Java, C and HTML. I enjoy playing games on my time off and love to draw. When I have nothing to do, I'll walk around my neighborhood and play Pokemon Go. I take pride in getting a Vorkath and Mole Pet under drop rate :3 if you know, you know.</i></h4>
                                    </td>
                                </tr>

                                <tr>
                                    <td style={{textBox}} colspan="3">
                                        
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </Fragment>
    )
}

export default JovannyRamos;