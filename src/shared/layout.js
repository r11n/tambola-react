import React, { useState, useEffect } from 'react';
import {Codesandbox } from 'react-feather';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

import {currentTheme, applyTheme, maximize, minimize, fullScreenEvents} from './utils';

export const Layout = {
    Main: ({children}) => {
        return (
            <main>
              <div>
                {children}
              </div>
            </main>
        )
    },
    Header: ({navItems}) => {
        const [theme, setTheme] = useState(currentTheme());
        useEffect(() => {
          applyTheme(theme);
        });
        const [full, setFull] = useState(!!document.fullscreenElement);
        useEffect(() => {
          fullScreenEvents(
            () => {setFull(true)},
            () => {setFull(false)}
          )
        })
        const themeIcon = {
          dark: 'Sun',
          light: 'Moon'
        }
        const icon = (name, color='currentColor') => {
          const FIcon = Icon[name];
          return (
            <FIcon className="svg-logo" color={color} size="36px"/>
          )
        }


        const toggle = () => {
          let newTheme = theme === 'dark' ? 'light' : 'dark';
          applyTheme(newTheme);
          setTheme(newTheme);
        }

        const toggleFullScreen = () => {
          if (full) {
            minimize();
          } else {
            maximize();
          }
        }

        return (
            <header>
                <nav className="navbar">
                  <ul className="navbar-nav">
                    <li className="logo">
                      <Link className="nav-link" to="/">
                        <span className="link-text logo-text">Tamb0</span>
                        <Codesandbox  size="36px"/>
                      </Link>
                    </li>
                    {(navItems || []).map((item, index) => (
                      <li className="nav-item" key={`navitem-${index}`} title={item.title || ''}>
                        <Link className="nav-link" to={item.link}>
                          {icon(item.icon)}
                          <span className="link-text">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                    <li className="nav-item" id="#maximize" title="Toggle Fullscren">
                      <a href="#" className="nav-link" onClick={toggleFullScreen}>
                        {icon(full ? 'Minimize2' : 'Maximize2')}
                        <span className="link-text">Toggle Fullscren</span>
                      </a>
                    </li>
                    <li className="nav-item" id="#themeButton" title="Toggle Theme">
                      <a href="#" className="nav-link" onClick={toggle}>
                        {icon(themeIcon[theme], theme === 'dark' ? '#FF8F00' : '#0277BD')}
                        <span className="link-text">{theme}</span>
                      </a>
                    </li>
                  </ul>
                </nav>
            </header>
        )
    },
    Footer: (props) => {
        return (
            <footer>
                <div>Footer</div>
            </footer>
        )
    }
}