import React, { useState } from 'react';

function PostCardTemplate() {
    return (
        <div className="posts">
            <p className="center"><b>Name of User</b></p>
            <p className="center"><br />Here will go a small description of the users post which will detail any posts they have made</p>
        </div>      
    );
}

export default PostCardTemplate;