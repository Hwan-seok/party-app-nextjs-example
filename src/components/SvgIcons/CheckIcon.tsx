import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <g strokeWidth={2}>
        <g data-name="\uD0C0\uC6D0 539" fill="#006cb3" stroke="#006cb3">
          <circle cx={16} cy={16} r={16} stroke="none" />
          <circle cx={16} cy={16} r={15} fill="none" />
        </g>
        <path
          d="M8.627 16.629l4.817 4.819 10.599-10.6"
          stroke="#fff"
          strokeLinecap="square"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
