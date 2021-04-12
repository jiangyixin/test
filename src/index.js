import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Webrtc from './components/Webrtc';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import Login from './components/Login';
import Calculator from './components/Calculator';
import WelcomeDialog from './components/WelcomeDialog';
import FilterableProductTable from './components/FilterableProductTable';

ReactDOM.render(
  // <Clock />,
  <div>
    <FilterableProductTable />
    {/*<WelcomeDialog />*/}
    {/*<Calculator />*/}
    {/*<Webrtc />*/}
    {/*<Clock />*/}
    {/*<Toggle />*/}
    {/*<Login />*/}
  </div>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
