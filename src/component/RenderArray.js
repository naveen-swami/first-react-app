import React from "react";

function RenderArray() {
    return (
        <div>
            <h3>City Name</h3>
            {Array(5).fill(10).map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}

export default RenderArray;