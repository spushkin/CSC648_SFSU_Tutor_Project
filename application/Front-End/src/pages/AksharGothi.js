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

function AksharGothi() {
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
                            <img src={require('../images/Akshar.jpg')} alt="Akshar Gothi" className="teamPhotoPage" />
                        </td>

                        <td style={{width:'60%'}}>
                            <table id="table-info">
                                <tr>
                                    <td style={headerStyle}>
                                        <h1 id="innerTableStyle">Akshar Gothi</h1> <br style={{clear: 'left'}}/>
                                        <h3 id="innerTableStyle">Back End Lead</h3> <br style={{clear: 'left'}}/>
                                        <h4 className="interFont" id="innerTableStyle" style={{width: '100%'}}><br /><i>My name is Akshar Gothi and I am the active Back End Lead of this project. I developed numerous projects using multiple languages such as php, python, javascript, java, c++ and many more. I worked as software developer in IT industry for 2 years. While working, I get knowledge about some third party tools which helps to manage customer, tools like emarsys, zoho, etc.</i></h4>
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

export default AksharGothi;