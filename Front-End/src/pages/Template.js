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

const description = {
    textAlign: 'start',
};

function Template() {
    return (
        <Fragment>
            <NavMenu />
            <div id="outer-container">
                <table id="table-info">
                    <tr>
                        <td style={{width:'10%'}}>
                            <h2 className="inter"><Link to="/about">Go Back</Link></h2>
                            <h2 className="inter"><Link to="/about">&lt;</Link></h2>
                        </td>
                        
                        <td style={{width:'30%'}}>
                            <div id="photo"></div>
                        </td>

                        <td style={{width:'60%'}}>
                            <table id="table-info">
                                <tr>
                                    <td style={headerStyle}>
                                        <h1 id="name">Name</h1> <br style={{clear: 'left'}}/>
                                        <h3 id="name">Role</h3>

                                    </td>
                                </tr>

                                <tr>
                                    <td style={{textBox}} colspan="3">
                                        <h4 className="inter" id="name" style={{description}}><i>Here goes aHere goes a short description abouHere goes a short description abouHere goes a short description abouHere goes a short description abouHere goes a short description abouHere goes a short description abouHere goes a short description abouHere goes a short description as a short description abou short description aboutHere goes a short description abouHere goes a short description abouHere goes a short description abouHere goes a short description abouHere goes a short description abouHere goes a short description abouHere goes a short description abouHere goes a short description abouHere goes a short description abouHere goes a short description abouS youdlksfjadfigkldfjsg;ldfsjaklfkdj;;;;;;;dk;gjdlfkgnuiaomeklj fhjuikdarlfknvdshjflgo;gjiwen hlgrjisuhodfjngvs lrjhg;ildzfjnghj;arelgnfdjlh.</i></h4>
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

export default Template;