import React from 'react';
import AISparkline from './AISparkline';

// PUBLIC_INTERFACE
export default function AIAnalyticsGrid({ metrics = [] }) {
  /**
   * Renders a responsive grid of analytics cards.
   * metrics: Array<{ id, label, value, delta, trend:number[] }>
   */
  const items = metrics.length
    ? metrics
    : [
        { id: 'mttr', label: 'Mean Time to Respond', value: '12m', delta: '-8%', trend: [40, 42, 38, 32, 28, 26, 24, 22] },
        { id: 'detections', label: 'AI Detections (24h)', value: '128', delta: '+12%', trend: [20, 25, 30, 28, 34, 40, 45, 50] },
        { id: 'risk', label: 'Aggregate Risk Score', value: '0.34', delta: '-3%', trend: [60, 58, 56, 54, 52, 50, 48, 46] },
        { id: 'coverage', label: 'Coverage', value: '96%', delta: '+2%', trend: [70, 72, 74, 75, 76, 78, 79, 80] },
      ];

  return (
    <section className="ai-grid" aria-label="AI Analytics">
      {items.map((m) => {
        const isPositive = m.delta.startsWith('+') || m.label.toLowerCase().includes('coverage');
        return (
          <div className="ai-card ai-kpi" key={m.id}>
            <div className="ai-card__header">
              <div className="ai-card__title">{m.label}</div>
              <span className="ai-badge ai-badge--small">AI</span>
            </div>
            <div className="ai-kpi__body">
              <div className="ai-kpi__value">{m.value}</div>
              <div className={`ai-kpi__delta ${isPositive ? 'pos' : 'neg'}`}>{m.delta}</div>
            </div>
            <AISparkline data={m.trend} />
          </div>
        );
      })}
    </section>
  );
}
