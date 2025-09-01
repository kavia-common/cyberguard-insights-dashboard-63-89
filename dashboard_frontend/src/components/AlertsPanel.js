import React from 'react';

// PUBLIC_INTERFACE
export default function AlertsPanel({ alerts = [] }) {
  /**
   * Renders a list of recent alerts with severity and AI confidence.
   * alerts: Array<{ id, title, severity: 'low'|'medium'|'high', confidence: number, time: string }>
   */
  const demo = alerts.length
    ? alerts
    : [
        { id: 'a1', title: 'Suspicious login pattern detected', severity: 'high', confidence: 0.94, time: '2m ago' },
        { id: 'a2', title: 'Data exfiltration anomaly', severity: 'medium', confidence: 0.82, time: '15m ago' },
        { id: 'a3', title: 'Privilege escalation attempt', severity: 'high', confidence: 0.91, time: '27m ago' },
        { id: 'a4', title: 'Unusual API usage spike', severity: 'low', confidence: 0.63, time: '52m ago' },
      ];

  return (
    <aside className="ai-card alerts-panel" aria-label="AI Alerts">
      <div className="ai-card__header">
        <div className="ai-card__title">Alerts & Notifications</div>
        <span className="ai-badge ai-badge--small">AI</span>
      </div>
      <ul className="alerts-list" role="list">
        {demo.map((a) => (
          <li key={a.id} className={`alert alert--${a.severity}`}>
            <div className="alert__title">{a.title}</div>
            <div className="alert__meta">
              <span className="pill">Confidence {Math.round(a.confidence * 100)}%</span>
              <span className="time">{a.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
