import * as React from 'react';
import './App.css';

import Header from './components/Header';
import Section from './components/Section';
// import Card from './components/Card';

class App extends React.Component {
  public render() {
    return (
      <>
         <Header />
         <Section title="Experience">
          <p>Hola</p>
         </Section>
      </>
    );
  }
}

export default App;
