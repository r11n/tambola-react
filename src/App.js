import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import {Layout} from './shared/layout';
import NewGame from './game/new';
import PlayGame from './game/play';
import ShowGame from './game/show';
const {Header, Main, Footer} = Layout;
function App() {
  return (
    <Router>
      <Header />
      <Main>
        <h1>Test</h1>
        <ul>
          <li><Link to="new">New game</Link></li>
          <li><Link to="play">Play game</Link></li>
          <li><Link to="Show">Show game</Link></li>
        </ul>
        <Switch>
          <Route path="/new"><NewGame /></Route>
          <Route path="/play"><PlayGame /></Route>
          <Route path="/show"><ShowGame /></Route>
        </Switch>
        <div style={{width: '450px', height: '150px', maxWidth: '100%'}}>
          <div style={{height: '50px', width: '100%', display: 'flex'}}>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
          </div>
          <div style={{ height: '50px', width: '100%', display: 'flex' }}>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
          </div>
          <div style={{ height: '50px', width: '100%', display: 'flex' }}>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
            <div style={{ width: 50, height: 50, border: '1px solid black' , maxWidth: '11%'}}></div>
          </div>
        </div>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
