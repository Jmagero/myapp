import React from 'react';
export const Button1 = () => {
    const handleClick = () => {
        alert("Hello from Button 1");
    }

    return (
        <div>
            <button onClick={handleClick}>Hello from Button 1</button>
        </div>
    );
}
