import React from 'react';
import { Route } from 'react-router';

import Navigation from './Navigation.jsx';
import Form from './Form.jsx';
import App from './App.jsx';

function Main(){
    return (
      <React.Fragment>
        <Route path="/" component={() => <Navigation />} />
        <Route path="/form" component={() => <Form />} />
        <Route path="/notes" component={() => <App />} />
      </React.Fragment>
    )
}

export default Main;