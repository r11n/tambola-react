import React from 'react';
import { Ticket } from './ticket';

class NewGame extends React.Component {
  render() {
      return (
          <div>
            New Game
            <Ticket />
          </div>
      )
  }
}

export default NewGame