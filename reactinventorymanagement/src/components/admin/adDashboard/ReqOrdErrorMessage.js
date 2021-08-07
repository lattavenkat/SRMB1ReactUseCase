import React from 'react'

export default function ReqOrdErrorMessage({message}) {
    return (
        <div>
            { 
                message &&  <span className="error">{message}</span> 
            }
        </div>
    )
}
