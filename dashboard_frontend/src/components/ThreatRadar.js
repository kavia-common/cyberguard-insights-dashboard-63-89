import React from 'react';

// PUBLIC_INTERFACE
export default function ThreatRadar({ threats = [] }) {
  /**
   * Displays a radar with animated sweep and plotted threat blips.
   * threats: Array<{ id: string, x: number, y: number, severity: 'low'|'medium'|'high'}>, coordinates 0..100
   */
  return (
    <div className="ai-card threat-radar" role="img" aria-label="AI Threat Detection Radar Visualization">
      <div className="ai-card__header">
        <div className="ai-card__title">Real-time Threat Radar</div>
        <span className="ai-badge ai-badge--small">AI</span>
      </div>
      <div className="radar">
        <div className="radar__grid" />
        <div className="radar__sweep" />
        {threats.slice(0, 12).map((t) => {
          const left = `${t.x}%`;
          const top = `${t.y}%`;
          return (
            <span
              key={t.id}
              className={`radar__blip radar__blip--${t.severity}`}
              style={{ left, top }}
              role="img"
              aria-label={`Threat ${t.id} severity ${t.severity}`}
            />
          );
        })}
      </div>
      <div className="ai-card__footer">
        <div className="legend">
          <span className="dot dot--low" /> Low
          <span className="dot dot--medium" /> Medium
          <span className="dot dot--high" /> High
        </div>
        <div className="meta">AI sweep active • model v1.2</div>
      </div>
    </div>
  );
}
