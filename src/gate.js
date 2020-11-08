import React from 'react';
import './App.css';

function Gate(isOpen){
    isOpen="yes"
    return(
        <div className="bold">
            {
                isOpen==="yes" ? "open" : "closed"

            }
        </div>
    )
}

export default Gate;