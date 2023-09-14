import React, { Fragment } from 'react';
import NavMenu from './NavMenu';

function Index() {
    return (
        <Fragment>
            <NavMenu /> 
            <div>
                <p>Home Page goes here, Go to About page</p> 
            </div>
        </Fragment>
    )
}

export default Index;