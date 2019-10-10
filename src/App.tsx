import * as React from 'react';
import './App.css';
import Hello from './components/Hello'
// import List from './pages/List'
import One from './FPages/One'
import Two from './FPages/Two'
import Three from './FPages/Three'
import Four from './FPages/Four'
import Five from './FPages/Five'
// import Seven from './FPages/Seven'

// import logo from './logo.svg';


class App extends React.Component {
  public constructor(props: any) {
    super(props)
    this.state = {

    }
  }

  public myClick = (data: string) => {
    console.log('App Event', data)
  }

  /**
   * name
   */
  public onIncrement() {
    console.log(111)
  }

  public render() {
    return (
      <div className="App">
        <p>Hello React TypeScript</p>
        <Hello title="what is this" age={20} onMyClick={this.myClick} />
        <One />
        <Two username="Dean" />
        <Three label="Hi" count={20} onIncrement={this.onIncrement} />
        <Four className="four" style={{ color: '#333' }} />
        <Five label="This is Five" />
        {/* <Seven /> */}
      </div>
    );
  }
}

export default App;
