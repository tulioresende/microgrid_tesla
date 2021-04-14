
import React from 'react';

const PowerLine = ({width=80, height=100, color="blue"}) =>{
    return(
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 100 110"
      fill={color}
    >
      <g>
        <path d="M86.012 87.676h-1.668V38.94h.101a3.034 3.034 0 003.032-3.03v-3.134a3.034 3.034 0 00-3.032-3.03H73.383v-3.333h1.668c.508 0 .98-.262 1.246-.695a1.46 1.46 0 00.062-1.426l-2.07-4.14h.762c.508 0 .98-.262 1.246-.696a1.46 1.46 0 00.062-1.426l-2.07-4.14h.762c.508 0 .98-.266 1.246-.696a1.46 1.46 0 00.062-1.425L73.23 5.508a1.47 1.47 0 00-1.312-.809h-1.664V1.465a1.465 1.465 0 00-2.93 0v3.23h-1.668c-.554 0-1.062.317-1.308.813l-3.133 6.262a1.469 1.469 0 001.313 2.121h.757l-2.07 4.14a1.46 1.46 0 00.066 1.426 1.46 1.46 0 001.246.695h.758l-2.07 4.141a1.46 1.46 0 00.066 1.426 1.46 1.46 0 001.246.695h1.664v3.332h-9.593v-3.332h1.664c.508 0 .98-.262 1.246-.695.27-.43.293-.969.066-1.426l-2.074-4.14h.762c.508 0 .98-.262 1.246-.696a1.46 1.46 0 00.066-1.426l-2.074-4.14h.762a1.469 1.469 0 001.312-2.121l-3.133-6.262a1.463 1.463 0 00-1.308-.813h-1.668v-3.23a1.465 1.465 0 00-2.93 0v3.23h-1.668c-.554 0-1.062.317-1.308.813l-3.133 6.262a1.469 1.469 0 001.313 2.121h.761l-2.074 4.14a1.46 1.46 0 00.066 1.426 1.46 1.46 0 001.246.695h.762l-2.074 4.141a1.46 1.46 0 00.066 1.426 1.46 1.46 0 001.246.695h1.664v3.332H35.81v-3.332h1.668a1.47 1.47 0 001.246-.695c.265-.43.289-.969.062-1.426l-2.07-4.14h.762a1.47 1.47 0 001.246-.696 1.47 1.47 0 00.062-1.426l-2.07-4.14h.762c.503 0 .976-.266 1.246-.696a1.47 1.47 0 00.062-1.425l-3.133-6.262a1.463 1.463 0 00-1.308-.813h-1.668v-3.23a1.465 1.465 0 00-2.93 0v3.23h-1.664c-.555 0-1.062.317-1.312.813l-3.13 6.262a1.47 1.47 0 00.063 1.425c.266.43.738.696 1.246.696h.762l-2.07 4.14a1.47 1.47 0 00.062 1.426 1.46 1.46 0 001.246.695h.762l-2.07 4.141a1.47 1.47 0 00.062 1.426 1.46 1.46 0 001.246.695h1.668v3.332H15.555a3.034 3.034 0 00-3.032 3.031v3.133a3.033 3.033 0 003.032 3.028h.101v48.738h-1.668a3.033 3.033 0 00-3.027 3.031v6.262A3.033 3.033 0 0013.988 100h72.024a3.033 3.033 0 003.027-3.031v-6.262a3.033 3.033 0 00-3.027-3.031zM66.562 7.625h4.454l1.664 3.336h-7.785zm0 6.266h4.454l1.664 3.332h-7.785zm0 6.261h4.454l1.664 3.332h-7.785zm3.891 6.262v3.332h-3.332v-3.332zM47.773 7.625h4.454l1.664 3.336h-7.782zm0 6.266h4.454l1.664 3.332h-7.782zm0 6.261h4.454l1.664 3.332h-7.782zm3.895 6.262v3.332h-3.336v-3.332zM28.984 7.625h4.453l1.668 3.336H27.32zm0 6.266h4.453l1.668 3.332H27.32zm0 6.261h4.453l1.668 3.332H27.32zm3.895 6.262v3.332h-3.332v-3.332zM86.012 97.07H13.988a.098.098 0 01-.097-.101v-6.262a.1.1 0 01.097-.102h6.266a1.465 1.465 0 000-2.93h-1.668V38.942h11.16v1.664a1.465 1.465 0 002.93 0v-1.664h15.86v1.664a1.465 1.465 0 002.929 0v-1.664h15.86v1.664a1.465 1.465 0 002.929 0v-1.664h3.23a1.465 1.465 0 000-2.93h-57.93a.103.103 0 01-.1-.1v-3.134c0-.054.046-.101.1-.101h68.891c.055 0 .102.047.102.101v3.133a.103.103 0 01-.102.102h-4.699a1.465 1.465 0 000 2.93h1.668v48.734H26.516a1.465 1.465 0 000 2.93h59.496a.1.1 0 01.097.101v6.262a.1.1 0 01-.097.101zm0 0"></path>
        <path d="M67.273 75.438L52.43 49.73A2.778 2.778 0 0050 48.324a2.778 2.778 0 00-2.43 1.406L32.727 75.438a2.772 2.772 0 000 2.804 2.783 2.783 0 002.43 1.406h29.687a2.783 2.783 0 002.43-1.406 2.772 2.772 0 000-2.805zm-31.902 1.28L50 51.379l14.629 25.34zm0 0"></path>
        <path d="M53.133 65.684a1.469 1.469 0 00-1.18-.598H50.04l1.36-4.363a1.467 1.467 0 00-.962-1.836 1.469 1.469 0 00-1.835.965l-1.954 6.261a1.48 1.48 0 00.22 1.305c.277.375.714.598 1.179.598h1.914l-1.36 4.363A1.463 1.463 0 0050 74.277c.625 0 1.203-.402 1.398-1.027l1.954-6.266a1.474 1.474 0 00-.22-1.3zm0 0"></path>
      </g>
    </svg>
    )
}

export default PowerLine;