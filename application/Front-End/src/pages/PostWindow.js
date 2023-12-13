import React, { useState, useEffect, Fragment } from 'react';

function PostWindow() {
    return(
        <Fragment>
            <div className="createpost-window">
                <h3>Enter post details:</h3>
                <div className="text-box">
                    <textarea placeholder="Limit to 500 Characters"></textarea>
                </div>
                <button className="post-button">Submit request</button>
            </div>
        </Fragment>
    );
}

export default PostWindow;