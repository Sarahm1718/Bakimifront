import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './Pages/Login/SingIn';
import Home from './Pages/Home/home';
import ProductsOily from './Pages/SkinPage/OilySkin/ProductsOily';
import Chat from './Pages/Chat/Chat';
import Profile from './Pages/Profile/Profile';
import HomeOily from './Pages/Home/homeOyli';
import HomeMixed from './Pages/Home/homeMixed';
import HomeDry from './Pages/Home/homeDry';
import PageRoutine from './Pages/Routines/PageRoutine';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/home" component={Home}/>
        <Route path="/productsOily" component={ProductsOily}/>
        <Route path="/chat" component={Chat}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/homeMixed" component={HomeMixed}/>
        <Route path="/homeOily" component={HomeOily}/>
        <Route path="/homeDry" component={HomeDry}/>
        <Route path="/pageRoutine" component={PageRoutine}/>


      </Switch>
    </Router>
  );
}

export default App;
