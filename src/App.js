import React, { useState, useEffect } from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import {Layout} from './shared/layout';
import NewGame from './game/new';
import PlayGame from './game/play';
import ShowGame from './game/show';
import { Ticket } from './shared/ticket';
import Landscape from './shared/landscape';
import { isMobile, isPortrait } from './shared/utils';
const {Header, Main, Footer} = Layout;
function App() {
  const [mobile, setMobile] = useState(isMobile() && isPortrait());
  useEffect(() => {
    setTimeout(() => {setMobile(false)},1500);
  });
  const headerLinks = [
    {
      name: 'New Game',
      link: '/new',
      icon: 'PlusCircle',
      title: 'Start New Game'
    }
  ]
  return (
    <Router>
      <Header navItems={headerLinks}/>
      <Main>
        {mobile && <Landscape />}
        <div className="container">
          <Switch>
            <Route path="/new"><NewGame /></Route>
            <Route path="/play"><PlayGame /></Route>
            <Route path="/show"><ShowGame /></Route>
          </Switch>
          <Ticket />
        </div>
      </Main>
    </Router>
  );
}

export default App;
