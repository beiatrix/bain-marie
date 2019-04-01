import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  async getTodos() {
    const res = await fetch('http://localhost:9000/api/todos')
    console.log(res)
  }

  componentWillMount() {
    this.getTodos()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
