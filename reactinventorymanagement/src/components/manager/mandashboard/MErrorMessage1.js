import React from 'react'

export default function MErrorMessage1({message}) {
    return (
        <div>
        { 
            message &&  <span className="error">{message}</span> 
        }
    </div>
    );
}

