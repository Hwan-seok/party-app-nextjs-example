import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <g strokeLinecap="square">
        <path
          d="M13.473 25.384a2.647 2.647 0 005.293 0"
          data-name="\uD328\uC2A4 730"
          fill="#44d89f"
          stroke="#44d89f"
        />
        <path
          d="M24.06 13.473v6.617q0 3.97 2.647 5.293H5.533Q8.18 24.06 8.18 20.09v-6.617a7.94 7.94 0 017.94-7.94 7.94 7.94 0 017.94 7.94z"
          data-name="\uD328\uC2A4 729"
          fill="none"
          stroke="#000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
