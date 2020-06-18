import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      unfilteredArray: [],
      filteredArray: []
    }
  }

  filterOdds(arr){
  return arr.filter(n=>!n%2)
  }

  handleChange(value){
    this.setState({filtered})
  }
  render(){
    return (
      <div className="App">
        <h2>filtered array</h2>
        <h3>{this.state.filteredArray}</h3>
        <input onChange={e=>this.inputHandling(e.target.value)}/>
        <button onClick={this.setState({filteredArray: this.filterOdds(this.state.unfilteredArray)})}>Click to Filter</button>
      </div>
    );
  }
}


export default App;
