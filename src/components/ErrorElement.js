import React from 'react';
import UseTitle from '../hooks/UseTitle';

const ErrorElement = () => {
    UseTitle('Error Page')
    return (
        <div>
            <h1>Error page</h1>
            <p>Page Not Found. Status 404</p>
        </div>
    );
};

export default ErrorElement;