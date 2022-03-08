import React from 'react';
export const Button3 = () => {
    const handleClick = () => {
        alert("Hello from Button 3");
    }

    return (
        <div>
            <button onClick={handleClick}>Hello from Button 3</button>
        </div>
    );
}
