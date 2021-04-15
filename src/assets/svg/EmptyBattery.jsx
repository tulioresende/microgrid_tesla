
import React from 'react';

const EmptyBattery = ({width=50, height=100, color="blue"}) =>{
    return(
        <svg width={width} height={height} viewBox="0 0 68 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.935913 17.2275L0.935913 93.6275C0.935913 97.1414 3.78696 100 7.29124 100H60.7091C64.2134 100 67.0644 97.1414 67.0644 93.6275V17.2275C67.0644 13.7135 64.2134 10.8544 60.7091 10.8544H7.29124C3.78696 10.8542 0.935913 13.7135 0.935913 17.2275ZM43.9063 37.8156C44.8111 36.9107 46.2778 36.9107 47.1821 37.8156L51.6123 42.2456C52.5172 43.1504 52.5172 44.6172 51.6123 45.5215L41.7063 55.4275L51.6123 65.3333C52.5172 66.2381 52.5172 67.7049 51.6123 68.6092L47.1821 73.0392C46.2773 73.9441 44.8106 73.9441 43.9063 73.0392L34.0003 63.1332L24.0944 73.0385C23.1896 73.9434 21.7229 73.9434 20.8185 73.0385L16.3885 68.6085C15.4837 67.7036 15.4837 66.2369 16.3885 65.3326L26.2943 55.4268L16.3885 45.5208C15.4837 44.6161 15.4837 43.1494 16.3885 42.2449L20.8185 37.8148C21.7234 36.91 23.1901 36.91 24.0944 37.8148L34.0003 47.7212L43.9063 37.8156Z" fill={color}/>
            <path d="M14.7284 6.37256C14.7284 6.37256 14.7284 6.65527 14.7284 7.00368C14.7284 7.35208 15.2075 7.63495 15.7977 7.63495L52.2022 7.63495C52.7927 7.63495 53.2715 7.35279 53.2715 7.00368V6.37256C53.2715 2.85861 50.4201 -0.000160217 46.9162 -0.000160217L21.0842 -0.000160217C17.58 1.52588e-05 14.7284 2.85861 14.7284 6.37256Z" fill={color}/>
        </svg>
    )
}

export default EmptyBattery;