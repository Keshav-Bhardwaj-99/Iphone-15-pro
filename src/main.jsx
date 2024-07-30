import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://b24a41d2a43037ea726cddae29019001@o4507593049964544.ingest.us.sentry.io/4507593054879744",
  integrations: [
    Sentry.browserTracingIntegration(),
    // Sentry.metrics.metricsAgrregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
    tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0,
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
