import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './Pages/Login/SingIn';
import Home from './Pages/Home/home';
import OilySkinPage from './Pages/SkinPage/OilySkin/OilySkinPage';
import MixedSkin from './Pages/SkinPage/MixedSkin/MixedSkin';
import DrySkin from './Pages/SkinPage/DrySkin/DrySkin';
import Chat from './Pages/Chat/Chat';
import DayRoutine from './Pages/Routines/DayRoutine/DayRoutine';
import NightRoutine from './Pages/Routines/NightRoutine/NightRoutine';
import PageRoutine from './Pages/Routines/PageRoutine';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/home" component={Home}/>
        <Route path="/oilySkinPage" component={OilySkinPage}/>
        <Route path="/dayRoutine" component={DayRoutine}/>
        <Route path="/nightRoutine" component={NightRoutine}/>
        <Route path="/pageRoutine" component={PageRoutine}/>
        <Route path="/mixedSkin" component={MixedSkin}/>
        <Route path="/drySkin" component={DrySkin}/>
        <Route path="/chat" component={Chat}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </Router>
  );
}

export default App;
