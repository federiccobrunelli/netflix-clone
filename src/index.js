import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalStyles } from './global-styles';
import { firebase } from './LIB/firebase.prod';
import { FirebaseContext } from './CONTEXT/firebase';


ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 

document.getElementById('root'));