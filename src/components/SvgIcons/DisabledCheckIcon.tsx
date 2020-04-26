import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <g
        data-name="\uD0C0\uC6D0 539"
        stroke="#f5f5f5"
        strokeWidth={2}
        fill="none"
      >
        <circle cx={16} cy={16} r={16} stroke="none" />
        <circle cx={16} cy={16} r={15} />
      </g>
    </svg>
  );
}

export default SvgComponent;
