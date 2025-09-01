import React from 'react';

/**
 * PUBLIC_INTERFACE
 * A simple sparkline component that renders a small SVG line chart.
 * Props:
 * - data: number[] values 0..100
 * - stroke: color string
 * - fill: color string (optional gradient-like low opacity)
 * - height, width: numeric dimensions
 */
export default function AISparkline({
  data = [10, 30, 25, 60, 45, 70, 55, 80],
  stroke = 'var(--ai-secondary)',
  fill = 'rgba(79, 209, 197, 0.18)',
  height = 36,
  width = 120,
}) {
  const max = Math.max(...data, 100);
  const min = Math.min(...data, 0);
  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((d - min) / (max - min || 1)) * height;
      return `${x},${y}`;
    })
    .join(' ');

  const pathD = `M ${points}`;
  const areaD = `M 0,${height} L ${points} L ${width},${height} Z`;

  return (
    <svg className="ai-sparkline" width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <path d={areaD} fill={fill} stroke="none" />
      <path d={pathD} fill="none" stroke={stroke} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <circle r="3" cx={width} cy={height - ((data[data.length - 1] - min) / (max - min || 1)) * height} fill={stroke} />
    </svg>
  );
}
