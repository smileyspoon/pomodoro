import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
	
	
var firebaseConfig = {
  apiKey: "AIzaSyATTDi2UxVCcDDBXpxp1QaRqtLdYNWBX0g",
  authDomain: "pomodoro-c108c.firebaseapp.com",
  projectId: "pomodoro-c108c",
  storageBucket: "pomodoro-c108c.appspot.com",
  messagingSenderId: "348966800544",
  appId: "1:348966800544:web:2b98905a61d9c3ebc34dc5",
  measurementId: "G-8MLFY9JN51"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
