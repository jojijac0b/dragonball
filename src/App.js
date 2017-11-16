import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import young from './pics/young.png';
import teen from './pics/teen.png';
import adult from './pics/adult.png';
import ss1 from './pics/ss1.png';
import ss2 from './pics/ss2.png';
import ss3 from './pics/ss3.png';
import god from './pics/god.png';
import blue from './pics/blue.png';

class App extends Component {
  state = {
    transform: false,
    current: 1,
    forms: [
      '', young, teen, adult, ss1, ss2, ss3, god, blue,
    ]
  }

  levelUp = () => {
    this.setState({
      transform: true,
    })
    if(this.state.current + 1 < this.state.forms.length){
      setTimeout(() => {
          this.setState({
          current: this.state.current+1,
          transform: false,
        })
      }, 1000);
    }
  }

  levelDown = () => {
    this.setState({
      transform: true,
    })
    if(this.state.current - 1 > 0){
      setTimeout(() => {
          this.setState({
          current: this.state.current-1,
          transform: false,
        })
      }, 1000);
    }
  }

  render() {
    if(this.state.transform){
      return <div className='transforming'></div>
    }
    else {
      return (
        <div className='container'>
          <div><img src={this.state.forms[this.state.current]} className="goku"/></div>
          <div className='buttons'>
            <button onClick={this.levelDown}>level down</button>
            <button onClick={this.levelUp}>level up</button>
          </div>
        </div>
      );
    }
  }
}

export default App;
