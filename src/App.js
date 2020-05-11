import React, { useState, useEffect } from 'react';
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import {Layout} from './shared/layout';
import NewGame from './game/new';
import PlayGame from './game/play';
import ShowGame from './game/show';
// import { Ticket } from './game/ticket';
import Landscape from './shared/landscape';
import { isMobile, isPortrait } from './shared/utils';
import AnimatedSwitch from './shared/animated_switch';
import AnimatedRoute from './shared/animated_route';
import { Ticket } from './game/ticket';
const {Header, Main} = Layout;
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
    },
    {
      name: 'Play Game',
      link: '/play',
      icon: 'PlayCircle',
      title: 'Join a game'
    }
  ]
  return (
    <Router>
      <Header navItems={headerLinks}/>
      <Main>
        {mobile && <Landscape />}
        <div className="container">
          <AnimatedSwitch >
            <AnimatedRoute exact type="openin" path="/new"><NewGame /></AnimatedRoute>
            <AnimatedRoute exact type="openin" path="/play"><PlayGame /></AnimatedRoute>
            <AnimatedRoute exact type="openin" path="/show"><ShowGame /></AnimatedRoute>
          </AnimatedSwitch>
        </div>
      </Main>
    </Router>
  );
}

export default App;
