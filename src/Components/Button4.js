import React from 'react';
export const Button4 = () => {
    const handleClick = () => {
        alert("Hello from Button 4");
    }

    return (
        <div>
            <button onClick={handleClick}>Hello from Button 4</button>
        </div>
    );
}
