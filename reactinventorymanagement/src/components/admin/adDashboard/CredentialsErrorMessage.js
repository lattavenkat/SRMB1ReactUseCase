import React from 'react';

export default function CredentialsErrorMessage({message}) {
    return (
        <div>
            { 
                message &&  <span className="error1">{message}</span> 
            }
        </div>
    )
}

