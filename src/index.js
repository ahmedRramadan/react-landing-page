import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'


function Appp(){


    return(
      <Fragment>
            <App/>   
    </Fragment>
    )
  }



ReactDOM.render(<Appp />, document.getElementById('root'));