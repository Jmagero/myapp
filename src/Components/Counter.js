import React, {useState} from 'react';

export const Counter = ({count,value, increment, decrement}) => {

    const incFuction = () =>{
        increment(value);
    }
    const decFuction = () =>{
        decrement(value);
    }

    return(
        <div>
            <button onClick={incFuction}>+ {value}</button>
            <button onClick={decFuction}>- {value}</button>
        </div>
        
    )
}