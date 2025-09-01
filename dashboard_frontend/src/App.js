import React, { useState, useEffect } from 'react';
import './App.css';
import AINavbar from './components/AINavbar';
import AIAnalyticsGrid from './components/AIAnalyticsGrid';
import ThreatRadar from './components/ThreatRadar';
import AlertsPanel from './components/AlertsPanel';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const mockThreats = [
    { id: 't1', x: 20, y: 30, severity: 'low' },
    { id: 't2', x: 55, y: 60, severity: 'medium' },
    { id: 't3', x: 78, y: 22, severity: 'high' },
    { id: 't4', x: 35, y: 80, severity: 'low' },
    { id: 't5', x: 12, y: 65, severity: 'medium' },
  ];

  return (
    <div className="App">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>

      <AINavbar theme={theme} />

      <main className="layout">
        <aside className="sidebar" aria-label="Modules Navigation">
          <div className="sidebar__section">
            <div className="sidebar__title">Modules</div>
            <ul className="sidebar__list">
              <li className="sidebar__item active">Dashboard</li>
              <li className="sidebar__item">Detections</li>
              <li className="sidebar__item">Incidents</li>
              <li className="sidebar__item">Policies</li>
              <li className="sidebar__item">Settings</li>
            </ul>
          </div>
          <div className="sidebar__section">
            <div className="sidebar__title">AI Models</div>
            <ul className="sidebar__list">
              <li className="sidebar__item">Anomaly v1.2</li>
              <li className="sidebar__item">Behavior v0.9</li>
              <li className="sidebar__item">Threat v3.1</li>
            </ul>
          </div>
        </aside>

        <section className="content">
          <AIAnalyticsGrid />
          <div className="content__row">
            <ThreatRadar threats={mockThreats} />
            <AlertsPanel />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} CyberGuard Insights • AI-Powered Security</div>
      </footer>
    </div>
  );
}

export default App;
