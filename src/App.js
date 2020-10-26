import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link, HashRouter} from "react-router-dom";
import CustomAppBar from './components/app-bar.component';
import Login from './components/login.component';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomAppBar/>
        <Route path={'/login'} component={Login}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
