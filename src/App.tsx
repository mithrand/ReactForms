import * as React from 'react';
import {ButtonForm} from './components/ButtonFormComponent';
import {SimpleAttendantList} from './components/SimpleAttendantsComponent';

const logo = require('./logo.svg');

class App extends React.Component<null, null> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h2>Button Form</h2>
        <ButtonForm />
        <h2>Text Input Form</h2>
        <SimpleAttendantList />
      </div>
    );
  }
}

export default App;
