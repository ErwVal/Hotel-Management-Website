import React from 'react';
import "../styling/Animation.css";

export const Animation: React.FunctionComponent = () => {
    return (
        <div>
            <video id="background-video" autoPlay loop muted>
                <source src="/video-resort.mp4" type="video/mp4" />
            </video>
        </div>
    )
}