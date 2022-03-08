import React from 'react';
export const Button2 = () => {
    const handleClick = () => {
        alert("Hello from Button 2");
    }

    return (
        <div>
            <button onClick={handleClick}>Hello from Button 2</button>
        </div>
    );
}
