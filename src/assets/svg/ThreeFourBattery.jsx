import React from 'react';

const ThreeFourBattery = ({width=100, height=100, color="blue"}) =>{
    return(
        <svg idth={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M16.9358 17.2275L16.9358 93.6275C16.9358 97.1414 19.7869 100 23.2911 100H76.709C80.2133 100 83.0643 97.1414 83.0643 93.6275V17.2275C83.0643 13.7135 80.2133 10.8548 76.709 10.8548H23.2911C19.7869 10.8542 16.9358 13.7135 16.9358 17.2275ZM74.1558 77.7021C76.1684 77.7021 77.8008 79.3387 77.8008 81.3569V90.5925C77.8008 92.6112 76.1684 94.2473 74.1558 94.2473H25.8442C23.8309 94.2473 22.199 92.6109 22.199 90.5925V81.3571C22.199 79.3381 23.8307 77.7022 25.8442 77.7022H74.1558V77.7021ZM74.1558 57.3489C76.1684 57.3489 77.8008 58.9853 77.8008 61.0038V70.2398C77.8008 72.2586 76.1684 73.8947 74.1558 73.8947H25.8442C23.8309 73.8947 22.199 72.2582 22.199 70.2398L22.199 61.0045C22.199 58.9855 23.8307 57.3496 25.8442 57.3496H74.1558V57.3489ZM74.1558 36.9963C76.1684 36.9963 77.8008 38.6327 77.8008 40.6511V49.8865C77.8008 51.9053 76.1684 53.5414 74.1558 53.5414H25.8442C23.8309 53.5414 22.199 51.9049 22.199 49.8865V40.6511C22.199 38.6324 23.8307 36.9963 25.8442 36.9963H74.1558Z" fill={color}/>
            <path d="M30.7283 6.37256C30.7283 6.37256 30.7283 6.65474 30.7283 7.00368C30.7283 7.35261 31.2074 7.63495 31.7976 7.63495L68.2019 7.63495C68.7924 7.63495 69.2712 7.35279 69.2712 7.00368V6.37256C69.2712 2.85861 66.4202 -0.000160217 62.9159 -0.000160217L37.0836 -0.000160217C33.5793 1.52588e-05 30.7283 2.85861 30.7283 6.37256Z" fill={color}/>
            </g>
            <defs>
            <clipPath id="clip0">
                <rect width={width} height={height} fill="white" transform="translate(0 100) rotate(-90)"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export default ThreeFourBattery;