

import React from 'react';

export const DisconnectedBattery = ({width=100, height=100, color="blue"}) =>{
    return(
        <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M83.0646 93.6276V92.5711L16.9357 35.9761L16.9357 93.6276C16.9357 97.1415 19.7867 100 23.291 100H76.7086C80.213 100 83.0646 97.1415 83.0646 93.6276Z" fill="#4CAD5B"/>
            <path d="M16.9357 17.2279V18.2844L83.0646 74.8795V17.2279C83.0646 13.714 80.2134 10.8549 76.7091 10.8549H23.291C19.7867 10.8547 16.9357 13.714 16.9357 17.2279Z" fill="#4CAD5B"/>
            <path d="M30.7281 6.37299C30.7281 6.37299 30.7281 6.6557 30.7281 7.0041C30.7281 7.35251 31.2072 7.63538 31.7974 7.63538L68.2016 7.63538C68.7923 7.63538 69.2709 7.35321 69.2709 7.0041V6.37299C69.2709 2.85905 66.4199 0.000274658 62.9156 0.000274658L37.0834 0.000274658C33.5791 0.000450611 30.7281 2.85905 30.7281 6.37299Z" fill={color}/>
            <path d="M90.2629 95.1934C91.9548 96.6411 94.5005 96.4433 95.9483 94.7513C96.5989 93.9911 96.9172 93.0593 96.9172 92.1315C96.9172 90.9938 96.4386 89.8638 95.5071 89.0664L83.0647 78.4181L16.9358 21.8231L9.73752 15.6624C8.04556 14.2147 5.50041 14.4125 4.05214 16.1045C2.60386 17.7964 2.80152 20.3416 4.49401 21.7894L16.9364 32.4377L83.0651 89.0325L90.2629 95.1934Z" fill={color}/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width={width} height={height} fill="white"/>
            </clipPath>
            </defs>
        </svg>

    )
}

export default DisconnectedBattery;