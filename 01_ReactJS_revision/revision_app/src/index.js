import React from 'react';
import ReactDOM from 'react-dom/client';
// import Goal from './component/Goal';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Garage from './component/Garage';
// const myJsx = <h1>This is the best React Tutorial forever</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App heading="React props" lang="JavaScript"/>
    {/* <Goal isGoal={true}/> */}
    {/* <Garage/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
