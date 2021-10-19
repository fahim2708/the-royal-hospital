import React from 'react';
import error from '../../404.jpg';

const NotFound = () => {
    return (
        <div className="text-center">
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;