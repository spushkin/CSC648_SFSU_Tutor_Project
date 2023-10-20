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
                    <table className="tempName">
                        <tr>
                            <td width="15%"><div className="centerSearchBar"><p>Filters</p></div></td>
                            <td width="100%"><input size="37" className="centerSearchBar" type="text" placeholder="Search for class (e.g. CSC-648)" name="search"></input></td>
                            <td width="15%"><div className="searchButton"><p>></p></div></td>
                        </tr>
                    </table>
                </div>

                <div className="titleBox">
                    <h2 className="center"><i>Best Place to find SFSU tutors</i></h2>
                    <h2 className="center"><i>for SFSU Students</i></h2>
                </div>
            </div>
        </Fragment>
    )
}

export default Index;