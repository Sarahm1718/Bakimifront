import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './Pages/Login/SingIn';
import Home from './Pages/Home/home';
import Chat from './Pages/Chat/Chat';
import Profile from './Pages/Profile/Profile';
import HomeOily from './Pages/Home/homeOyli';
import HomeMixed from './Pages/Home/homeMixed';
import HomeDry from './Pages/Home/homeDry';
import PageRoutine from './Pages/Routines/PageRoutine';
import MascarillasNaturales from './Pages/SkinPage/MascarillasNaturales'
import BloqueadorSolar from './Pages/SkinPage/BloqueadorSolar'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/home" component={Home}/>
        <Route path="/chat" component={Chat}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/homeMixed" component={HomeMixed}/>
        <Route path="/homeOily" component={HomeOily}/>
        <Route path="/homeDry" component={HomeDry}/>
        <Route path="/pageRoutine" component={PageRoutine}/>
        <Route path="/mascarillasNaturales" component={MascarillasNaturales}/>
        
        <Route path="/bloqueadorSolar" component={BloqueadorSolar}/>



      </Switch>
    </Router>
  );
}

export default App;
