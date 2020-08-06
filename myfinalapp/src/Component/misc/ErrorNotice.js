import React from 'react';
import "./ErrorNotice.css";
export default function ErrorNotice(props){
    return(
        <div className="error-notice">
            <span>{props.message}</span>
            <button onClick={props.clearError}>x</button>

        </div>
    )
}