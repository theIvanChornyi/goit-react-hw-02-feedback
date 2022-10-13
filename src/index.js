import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Widget } from 'components/FeedbackWidget';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Widget></Widget>
    </App>
  </React.StrictMode>
);
