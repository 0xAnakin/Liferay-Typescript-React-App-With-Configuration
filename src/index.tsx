import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

declare var _LIFERAY_PARAMS_: {
  configuration: {
    system: Record<string, string>;
    portletInstance: Record<string, string>;
  };
  contextPath: string;
  portletElementId: string;
  portletNamespace: string;
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App params={_LIFERAY_PARAMS_} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
