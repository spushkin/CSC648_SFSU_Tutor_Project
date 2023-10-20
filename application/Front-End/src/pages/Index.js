import React, { Fragment } from 'react';
import NavMenu from './NavMenu';

function Index() {
    return (
        <Fragment>
            <NavMenu /> 
            <div className="searchBox">
                <div className="titleBox">
                    <h2 className="center"><i>Best Place to find SFSU tutors</i></h2>
                    <h2 className="center"><i>for SFSU Students</i></h2>
                </div>

                <div className="searchBar">
                    <table className="tableStyle">
                        <tr>
                            <td width="15%" className="dropDownBox">
                                <select name="filters" id="subject" className="dropDownMenu">
                                    <option value="all">All</option>
                                    <option value="math">Math</option>
                                    <option value="physics">Physics</option>
                                    <option value="history">History</option>
                                </select>
                            </td>
                            <td width="100%"><input size="37" className="centerSearchBar" type="text" placeholder="Search for class (e.g. CSC-648)" name="search"></input></td>
                            <td width="15%"><div className="searchButton"><button className="goButton">></button></div></td>
                        </tr>
                    </table>
                </div>

                <div className="bottomTitleBox">
                    <h4 className="center"><i>One of the greatest collection of San Francisco State Universtiy experts in 100+ subjects ready to educate you on your time!</i></h4>
                </div>

                <div className="tempname"></div>
            </div>
        </Fragment>
    )
}

export default Index;