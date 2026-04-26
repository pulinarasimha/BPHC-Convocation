/*
  src/index.js
  ─────────────────────────────────────────────────────────────────
  WHY THIS FILE:
    This is the JavaScript entry point that react-scripts (Webpack)
    uses as its starting module.  It imports React, ReactDOM, the
    root <App /> component, and global CSS, then mounts the whole
    application into the <div id="root"> in public/index.html.

  React 18 uses createRoot (concurrent mode) instead of the legacy
  ReactDOM.render for better performance and concurrent features.
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
