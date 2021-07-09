import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './Pages/Login/SingIn';
import Home from './Pages/Home/home';
import OilySkinPage from './Pages/SkinPage/OilySkin/OilySkinPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/home" component={Home}/>
        <Route path="/oilySkinPage" component={OilySkinPage}/>
      </Switch>
    </Router>
  );
}

export default App;
