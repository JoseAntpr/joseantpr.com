import * as React from 'react';
import './App.css';

import Avatar from './components/Avatar';
import Icon from './components/Icon';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Avatar />
        <Icon />
      </div>
    );
  }
}

export default App;
