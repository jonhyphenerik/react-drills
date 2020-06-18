import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      fibonacci: [1,1,2]
    }
  }
  generateFibonacciSequence(terms = 10){
    let sequence=[1,1]
    for(let i=2;i<=terms; i++){
      sequence[i]=sequence[i-1]+sequence[i-2];
    }
    return sequence
  }
  handleChange(val){
    this.setState({fibonacci: this.generateFibonacciSequence(val)});
  }
  render(){
    return (
      <div className="App">
        <select onChange={e=>this.handleChange(e.target.value)}>
          <option value="2">3</option>
          <option value="3">4</option>
          <option value="4">5</option>
          <option value="5">6</option>
          <option value="6">7</option>
          <option value="7">8</option>
          <option value="8">9</option>
        </select>
        <div>
          <h1>{this.state.fibonacci[0]}</h1>
          <h1>{this.state.fibonacci[1]}</h1>
          <h1>{this.state.fibonacci[2]}</h1>
          <h1>{this.state.fibonacci[3]}</h1>
          <h1>{this.state.fibonacci[4]}</h1>
          <h1>{this.state.fibonacci[5]}</h1>
          <h1>{this.state.fibonacci[6]}</h1>
          <h1>{this.state.fibonacci[7]}</h1>
          <h1>{this.state.fibonacci[8]}</h1>
        </div>
    </div>
    );
  }
}

export default App;
