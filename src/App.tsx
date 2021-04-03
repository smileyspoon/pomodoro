import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';
import { auth, database, getCurrentUser, createUserProfileDocument, signOut } from './firebase';
import _ from 'lodash';


import './App.css';


const App = () => {

  return  (

      <div>Start</div>
    
          );
      
}

export default App;
